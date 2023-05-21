import {
  ComponentFixture,
  TestBed,
  discardPeriodicTasks,
  fakeAsync,
  flush,
  flushMicrotasks,
  tick,
} from '@angular/core/testing';

import { SimpleCarouselComponent } from './simple-carousel.component';

describe('SimpleCarouselComponent', () => {
  let component: SimpleCarouselComponent;
  let fixture: ComponentFixture<SimpleCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the carousel component', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the carousel container when there are no images', () => {
    component.images = [];
    fixture.detectChanges();

    const carouselImages = fixture.nativeElement.querySelector(
      '.carousel-container'
    );
    expect(carouselImages).toBeFalsy();
  });

  it('should display images in the carousel', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    fixture.detectChanges();

    const carouselImages = fixture.nativeElement.querySelectorAll(
      '.carousel-container img'
    );
    expect(carouselImages.length).toBe(component.images.length);
  });

  it('should update the selected index when an image is clicked', () => {
    component.selectedIndex = 1;
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    fixture.detectChanges();

    const imageIndex = 2; // Select the second image
    const carouselDots = fixture.nativeElement.querySelectorAll(
      '.carousel-dot-container .dot'
    );
    carouselDots[imageIndex].click();
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(imageIndex);
  });

  it('should navigate to the previous image on "Previous" button click', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    component.selectedIndex = 1; // Start with the second image selected
    fixture.detectChanges();

    const prevButton = fixture.nativeElement.querySelector('.btn-prev');
    prevButton.click();
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(0);
  });

  it('should navigate to the next image on "Next" button click', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    component.selectedIndex = 1; // Start with the second image selected
    fixture.detectChanges();

    const nextButton = fixture.nativeElement.querySelector('.btn-next');
    nextButton.click();
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(2);
  });

  it('should display indicators based on the condition', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    component.indicators = true; // Set indicators to true
    fixture.detectChanges();

    const carouselDotsContainer = fixture.nativeElement.querySelector(
      '.carousel-dot-container'
    );
    expect(carouselDotsContainer).toBeTruthy();

    component.indicators = false; // Set indicators to false
    fixture.detectChanges();

    const updatedCarouselDotsContainer = fixture.nativeElement.querySelector(
      '.carousel-dot-container'
    );
    expect(updatedCarouselDotsContainer).toBeFalsy();
  });

  it('should display previous and next buttons when controls are enabled', () => {
    component.controls = true; // Enable controls
    fixture.detectChanges();

    const prevButton = fixture.nativeElement.querySelector('.btn-prev');
    const nextButton = fixture.nativeElement.querySelector('.btn-next');

    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });

  it('should not display previous and next buttons when controls are disabled', () => {
    component.controls = false; // Disable controls
    fixture.detectChanges();

    const prevButton = fixture.nativeElement.querySelector('.btn-prev');
    const nextButton = fixture.nativeElement.querySelector('.btn-next');

    expect(prevButton).toBeFalsy();
    expect(nextButton).toBeFalsy();
  });

  it('should navigate to the previous image on "Previous" button click when controls are enabled', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    component.controls = true; // Enable controls
    component.selectedIndex = 1; // Start with the second image selected
    fixture.detectChanges();

    const prevButton = fixture.nativeElement.querySelector('.btn-prev');
    prevButton.click();
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(0);
  });

  it('should navigate to the next image on "Next" button click when controls are enabled', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    component.controls = true; // Enable controls
    component.selectedIndex = 1; // Start with the second image selected
    fixture.detectChanges();

    const nextButton = fixture.nativeElement.querySelector('.btn-next');
    nextButton.click();
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(2);
  });

  it('should apply the "image-active" class to the active image', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    component.selectedIndex = 1; // Select the second image
    fixture.detectChanges();

    const carouselImages = fixture.nativeElement.querySelectorAll(
      '.carousel-container img'
    );

    // Check if the second image has the "image-active" class applied
    expect(carouselImages[1].classList.contains('image-active')).toBe(true);

    // Check if the first and third images do not have the "image-active" class
    expect(carouselImages[0].classList.contains('image-active')).toBe(false);
    expect(carouselImages[2].classList.contains('image-active')).toBe(false);
  });

  it('should apply the "active" class to the active indicator', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    component.selectedIndex = 1; // Select the second image
    fixture.detectChanges();

    const carouselIndicators = fixture.nativeElement.querySelectorAll(
      '.carousel-dot-container .dot'
    );

    // Check if the second indicator has the "active" class applied
    expect(carouselIndicators[1].classList.contains('active')).toBe(true);

    // Check if the first and third indicators do not have the "active" class
    expect(carouselIndicators[0].classList.contains('active')).toBe(false);
    expect(carouselIndicators[2].classList.contains('active')).toBe(false);
  });

  it('should select the corresponding image when an indicator is clicked', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    fixture.detectChanges();

    const carouselIndicators = fixture.nativeElement.querySelectorAll(
      '.carousel-dot-container .dot'
    );
    const indexToSelect = 2;

    carouselIndicators[indexToSelect].click();
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(indexToSelect); // Verify that the selected index has changed
  });

  it('should navigate to the last image when "Previous" button is clicked at the first image', () => {
    component.images = [
      { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
      { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
      { imageSrc: 'image3.jpg', imageAlt: 'Image 3' },
    ];
    component.selectedIndex = 0; // First image selected
    component.controls = true; // Enable controls
    fixture.detectChanges();

    const prevButton = fixture.nativeElement.querySelector('.btn-prev');
    prevButton.click();
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(component.images.length - 1); // Verify that the index has wrapped around to the last image
  });

  // TODO: Test case for automatic sliding:
});
