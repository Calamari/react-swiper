import React from 'react';
import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper/dist/js/swiper.js';

function pagination(argPagination) {
  if (argPagination) {
    return <div className="swiper-pagination"></div>;
  }
  return null;
}

function navigationButton(argPrev, argNext) {
  if (argPrev && argNext) {
    return (
      <div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
  return null;
}

function scrollBar(argBar) {
  if (argBar) {
    return <div className="swiper-scrollbar"></div>;
  }
  return null;
}

class ReactSwiper extends React.Component {
  componentDidMount() {
    const { swipeOptions } = this.props;
    this.swipe = new Swiper(this.refs.container, swipeOptions);
  }
  componentWillUnmount() {
    this.swipe.destroy(true, true);
    this.swipe = void 0;
  }
  onResize() {
    this.swipe.onResize();
  }
  getWrapperTranslate(axis = 'x') {
    this.swipe.getWrapperTranslate(axis);
  }
  setWrapperTranslate(translate) {
    this.swipe.setWrapperTranslate(translate);
  }
  disableMousewheelControl() {
    this.swipe.disableMousewheelControl();
  }
  enableMousewheelControl() {
    this.swipe.enableMousewheelControl();
  }
  disableKeyboardControl() {
    this.swipe.disableKeyboardControl();
  }
  enableKeyboardControl() {
    this.swipe.enableKeyboardControl();
  }
  slideTo(index, speed = 1000, runCallbacks = false) {
    this.swipe.slideTo(index, speed, runCallbacks);
  }
  startAutoplay() {
    this.swipe.startAutoplay();
  }
  stopAutoplay() {
    this.swipe.stopAutoplay();
  }
  destroy(deleteInstance = true, cleanupStyles = false) {
    this.swipe.destroy(deleteInstance, cleanupStyles);
  }
  prev(runCallbacks = false, speed = 1000) {
    this.swipe.slidePrev(runCallbacks, speed);
  }
  next(runCallbacks = false, speed = 1000) {
    this.swipe.slideNext(runCallbacks, speed);
  }
  removeSlide(index) {
    this.swipe.removeSlide(index);
  }
  removeAllSlides() {
    this.swipe.removeAllSlides();
  }
  updateContainerSize() {
    this.swipe.updateContainerSize();
  }
  updateSlidesSize() {
    this.swipe.updateSlidesSize();
  }
  updateProgress() {
    this.swipe.updateProgress();
  }
  updatePagination() {
    this.swipe.updatePagination();
  }
  updateClasses() {
    this.swipe.updateClasses();
  }
  update(updateTranslate = false) {
    this.swipe.update(updateTranslate);
  }
  lockSwipes() {
    this.swipe.lockSwipes();
  }
  unlockSwipes() {
    this.swipe.unlockSwipes();
  }
  lockSwipeToNext() {
    this.swipe.lockSwipeToNext();
  }
  lockSwipeToPrev() {
    this.swipe.lockSwipeToPrev();
  }
  render() {
    const { children, swipeOptions, style, className } = this.props;
    const containerStyle = style || {};
    const containerClassName =
      className ? `${className} swiper-container` : 'swiper-container';
    return (
      <div className={containerClassName} style={containerStyle} ref="container">
        <div className="swiper-wrapper">
          {React.Children.map(children, child => {
            const childClassName =
              child.props.className ? `${child.props.className} swiper-slide` : ' swiper-slide';
            const childStyle = child.props.style || {};
            return React.cloneElement(child, { className: childClassName, style: childStyle });
          }
          )}
        </div>
        {pagination(swipeOptions.pagination)}
        {navigationButton(swipeOptions.prevButton, swipeOptions.nextButton)}
        {scrollBar(swipeOptions.scrollbar)}
      </div>
    );
  }
}

ReactSwiper.propTypes = {
  children: React.PropTypes.array,
  swipeOptions: React.PropTypes.object,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
};

export default ReactSwiper;
