<template lang="pug">
  div(class='swiper' @mousedown='startSwipe')
    transition(
        mode='out-in'
        @enter='enter'
        @leave='leave')
        slot
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TweenMax, { TimelineMax, Elastic, SlowMo } from 'gsap';
import { NoCache } from '@/decorators';
import { RouteConfig } from 'vue-router';

export enum RoutePath {
  next,
  previous,
}

export interface CustomTouchEvent extends TouchEvent {
  pageX: number;
  pageY: number;
}

export interface Swiper {
  tabRoutes: object[];
  colors: string[];
}

@Component({
  name: 'AwesomeSwiper',
  props: {
    tabRoutes: {
      type: Array,
    },
    colors: {
      type: [Array, String],
      default: 'hsla(0, 0%, 100%, 1)',
    },
  },
})

export default class AwesomeSwiper extends Vue {
  public animation: any = TweenMax;
  public backColor: string = '';
  public lastRandomNumber: number = -1;
  public entered: boolean = false;

  @NoCache
  get getRandomColor(): string {
    return this.$props.colors[this.randomNumber(this.$props.colors as any)];
  }

  @NoCache
  get randomFunction(): string {
    return this.effects[this.randomNumber(this.effects as any)];
  }

  @NoCache
  get textColor(): string {
    const color: object | any = this.parseColor(this.backColor);
    return (color.lightness > 30) ? 'white' : 'black';
  }

  @NoCache
  get arrRoutes(): object[] {
    return Array.isArray(this.$props.tabRoutes)
      ? this.$props.tabRoutes
      : (this as any).$router.options.routes;
  }

  get index(): number {
    return this.arrRoutes.findIndex( (r: any) => r.path.toLowerCase() === this.$route.path );
  }

  get nextIndex(): number {
    return this.index === this.arrRoutes.length - 1 ? this.index : this.index + 1;
  }

  get previousIndex(): number {
    return !this.index ? this.index : this.index - 1;
  }

  @NoCache
  get color(): string[] {
    return Array.from([this.$props.colors]);
  }

  protected effects: string[] = [
    'fade', 'slide', 'slideUp',
    'flipX', 'flipY', 'zoom',
  ];

  private position = {
    x: 0,
    y: 0,
  };

  public randomNumber(arr: string): number {
    return Math.floor(Math.random() * Math.floor(arr.length - 1));
  }

  public fadeEnter(el: HTMLElement, done: any): void {
    this.animation.fromTo(el, 1, {
      autoAlpha: 0,
      scale: 1.5,
    }, {
      autoAlpha: 1,
      scale: 1,
      transformOrigin: '50% 50%',
      ease: 'Power4.easeOut',
      onComplete: done,
    });
  }

  public fadeLeave(el: HTMLElement, done: any): void {
    this.animation.fromTo(el, 1, {
        autoAlpha: 1,
        scale: 1,
      }, {
        autoAlpha: 0,
        scale: 0.8,
        ease: 'Power4.easeOut',
        onComplete: done,
      });
  }

  public slideEnter(el: HTMLElement, done: any): void {
    const tl = new TimelineMax({
      onComplete: done,
    });
    tl.set(el, {
      x: window.innerWidth * 1.5,
      scale: 0.8,
      transformOrigin: '50% 50%',
    });
    tl.to(el, 0.5, {
      x: 0,
      ease: 'Power4.easeOut',
    });
    tl.to(el, 1, {
      scale: 1,
      ease: 'Power4.easeOut',
    });
  }

  public slideLeave(el: HTMLElement, done: any): void {
    this.animation.fromTo(el, 1, {
      autoAlpha: 1,
    }, {
      autoAlpha: 0,
      ease: 'Power4.easeOut',
      onComplete: done,
    });
  }

  public slideUpEnter(el: HTMLElement, done: any): void {
    const tl = new TimelineMax({
      onComplete: done,
    });
    tl.set(el, {
      y: window.innerWidth * 1.5,
      scale: 0.8,
      transformOrigin: '50% 50%',
    });
    tl.to(el, 0.5, {
      y: 0,
      ease: 'Power4.easeOut',
    });
    tl.to(el, 1, {
      scale: 1,
      ease: 'Power4.easeOut',
    });
  }

  public slideUpLeave(el: HTMLElement, done: any): void {
    this.animation.to(el, 1, {
      y: window.innerHeight * -1.5,
      ease: 'Power4.easeOut',
      onComplete: done,
    });
  }

  public flipXEnter(el: HTMLElement, done: any): void {
    const tl = new TimelineMax({
      onComplete: done,
    });
    tl.set(el, {
      autoAlpha: 0,
      rotationX: 90,
      transformOrigin: '50% 50%',
    });
    tl.to(el, 1, {
      autoAlpha: 1,
      rotationX: 0,
      ease: 'Power4.easeOut',
    });
  }

  public flipXLeave(el: HTMLElement, done: any): void {
    this.animation.to(el, 1, {
      scale: 0,
      ease: 'Power4.easeOut',
      onComplete: done,
    });
  }

  public flipYEnter(el: HTMLElement, done: any): void {
    const tl = new TimelineMax({
      onComplete: done,
    });
    tl.set(el, {
      autoAlpha: 0,
      rotationY: 90,
      transformOrigin: '50% 50%',
    });
    tl.to(el, 1, {
      autoAlpha: 1,
      rotationY: 0,
      ease: 'Power4.easeOut',
    });
  }

  public flipYLeave(el: HTMLElement, done: any): void {
    this.animation.to(el, 1, {
      scale: 0,
      ease: 'Power4.easeOut',
      onComplete: done,
    });
  }

  public zoomEnter(el: HTMLElement, done: any): void {
    const tl = new TimelineMax({
      onComplete: done,
    });
    tl.set(el, {
      autoAlpha: 0,
      scale: 2,
      transformOrigin: '50% 50%',
    });
    tl.to(el, 1, {
      autoAlpha: 1,
      scale: 1,
      ease: 'Power4.easeOut',
    });
  }

  public zoomLeave(el: HTMLElement, done: any): void {
    this.animation.to(el, 1, {
      scale: 0,
      ease: 'Power4.easeOut',
      onComplete: done,
    });
  }

  protected parseHSLA(color: string): string[] | null {
    const regexp = /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)/ig;
    return regexp.exec(color);
  }

  protected parseColor(color: string): object {
    const parseHSLA = this.parseHSLA(color);
    return {
      hue: parseHSLA !== null ? parseInt(parseHSLA[1], 10) : -1,
      saturation: parseHSLA !== null ? parseInt(parseHSLA[2], 10) : -1,
      lightness: parseHSLA !== null ? parseInt(parseHSLA[3], 10) : -1,
      alpha: parseHSLA !== null ? parseInt(parseHSLA[4], 10) : -1,
    };
  }

  protected setGradient(color: string): string {
    const parseHSLA = this.parseHSLA(color);
    const hue: number = parseHSLA !== null ? parseInt(parseHSLA[1], 10) : 35;
    const saturation: number = parseHSLA !== null ? parseInt(parseHSLA[2], 10) : 100;
    const lightness: number = parseHSLA !== null ? parseInt(parseHSLA[3], 10) : 30;
    const alpha: number = parseHSLA !== null ? parseInt(parseHSLA[4], 10) : 1;
    const first = (val: number): number => Math.round(val);
    const second = (val: number): number => Math.round(val * 0.56);
    const third = (val: number): number => Math.round(val * 0.36);
    const fourth = (val: number): number => Math.round(val * 0.25);
    return `linear-gradient(135deg,
      hsla(${first(hue)}, ${first(saturation)}%, ${first(lightness)}%, 1) 0%,
      hsla(${second(hue)}, ${second(saturation)}%, ${second(lightness)}%, 0.74) 36%,
      hsla(${third(hue)}, ${third(saturation)}%, ${third(lightness)}%, 0.5) 71%,
      hsla(${fourth(hue)}, ${fourth(saturation)}%, ${fourth(lightness)}%, 0.29) 100%) no-repeat`;
  }

  protected setBackGround(): void {
    const color: string = this.getRandomColor;
    const elemet: any = this.$el.firstChild;
    elemet.style.color = this.textColor;
    elemet.style.backgroundColor = this.$props.colors === 'hsla(0, 0%, 100%, 1)' ? 'inherit' : color;
    this.backColor = color;
  }
  // --------
  // ENTERING
  // --------
  protected enter(el: HTMLElement, done: void): void {
    // the done callback is optional when
    // used in combination with CSS
    this.setBackGround();
    this.entered = true;
    (this as any)[this.randomFunction + 'Enter'](el, done);
    this.goTuch(el);

    // TODO: add text animation
    // const iter = document.createNodeIterator (el, NodeFilter.SHOW_TEXT);
    // let textnode: any;

    // while (textnode = iter.nextNode()) {
    // }

  }

  // --------
  // LEAVING
  // --------
  protected leave(el: HTMLElement, done: any): void {
    if (el.parentElement) {
      el.parentElement.style.background = this.$props.colors === 'hsla(0, 0%, 100%, 1)'
        ? 'inherit'
        : this.setGradient(this.backColor);
    }
    if (!this.$data.entered) { setTimeout(() => done(), 750); return; }
    (this as any)[this.randomFunction + 'Leave'](el, done);
  }

  protected move(event: MouseEvent | TouchEvent | CustomTouchEvent): void {
    const x: number = (event as MouseEvent).pageX
      ? (event as MouseEvent).pageX
      : (this.getFirstTouch(event as TouchEvent) as CustomTouchEvent).pageX;
    const y: number = (event as MouseEvent).pageY
      ? (event as MouseEvent).pageY
      : (this.getFirstTouch(event as TouchEvent) as CustomTouchEvent).pageY;
    if (!this.entered) { return; }
    if ((Math.abs(y - this.position.y)) > 3) { return; }
    if ((Math.abs(x - this.position.x)) > 3) {
      const element: any = this.$el.firstChild;
      element.style.boxShadow = '12px 0 15px -4px rgba(0,0,0,0.25), -12px 0 8px -4px rgba(0,0,0,0.25)';
      this.animation.to(element, 1, {
        x: x - this.position.x,
        ease: 'Power4.easeOut',
      });
    }
  }

  protected goTo(route: RoutePath): void {
    const routes = this.arrRoutes as RouteConfig[];
    const next: string = routes[this.nextIndex].path;
    const previous: string = routes[this.previousIndex].path;
    this.$data.entered = false;
    if (route === RoutePath.next) {
      this.$router.push(next);
    } else {
      this.$router.push(previous);
    }
  }

  protected stopMove(event: MouseEvent | TouchEvent | CustomTouchEvent): void {
    const element: any = this.$el.firstChild;
    // const element: any = event.target;
    const width: number = element.clientWidth;
    const x: number = (event as MouseEvent).pageX
      ? (event as MouseEvent).pageX
      : (this.getFirstTouch(event as TouchEvent) as CustomTouchEvent).pageX;
    if ((Math.abs(x - this.position.x) < (width / 5))
      || (!this.index && !this.previousIndex && (x - this.position.x > 0))
      || (this.index === this.arrRoutes.length - 1 && (x - this.position.x < 0))) {
      this.animation.to(element, 0.8, {
        x: 0,
        ease: Elastic.easeOut.config(1, 0.5),
      });
    } else {
      if ((x - this.position.x) > 0) {
        this.animation.to(element, 0.75, {
          x: width * 1.5,
          ease: SlowMo.ease.config(0.7, 0.7, false),
          onComplete: this.goTo(RoutePath.previous),
        });
      } else {
        this.animation.to(element, 0.75, {
          x: width * -1.5,
          ease: SlowMo.ease.config(0.7, 0.7, false),
          onComplete: this.goTo(RoutePath.next),
        });
      }
    }
    this.stopEvents();
  }

  protected getFirstTouch(event: TouchEvent): object {
    return event.changedTouches[0];
  }

  protected touchStart(event: TouchEvent) {
    const touch: object = this.getFirstTouch(event);
    this.savePosition(touch);
  }

  protected touchMove(event: TouchEvent) {
    const touch: object = this.getFirstTouch(event);
    if (event.type !== 'touchmove') { return; }
    this.move(event);
  }

  protected touchStop(event: TouchEvent) {
    this.stopMove(event);
  }

  protected goTuch(el: any): void {
    // Register touch event handlers
    el.addEventListener('touchstart', this.touchStart, false);
    el.addEventListener('touchmove', this.touchMove, false);
    el.addEventListener('touchcancel', this.touchStop, false);
    el.addEventListener('touchend', this.touchStop, false);
  }

  protected savePosition(event: any) {
    this.position = {
      x: event.pageX,
      y: event.pageY,
    };
  }

  protected startSwipe(event: MouseEvent | CustomTouchEvent): void {
    this.$el.addEventListener('mousemove', this.move);
    window.addEventListener('mouseup', this.stopMove);
    this.$el.addEventListener('mouseup', this.stopMove);
    this.$el.addEventListener('mouseleave', this.stopMove);
    this.savePosition(event);
  }

  private updated(): void {
    this.goTuch(this.$el.firstChild);
  }

  private mounted(): void {
    this.setBackGround();
    this.goTuch(this.$el.firstChild);
  }

  private stopEvents(): void {
    this.$el.removeEventListener('mousemove', this.move);
    this.$el.removeEventListener('mouseup', this.stopMove);
    this.$el.removeEventListener('mouseleave', this.stopMove);
    window.removeEventListener('mouseup', this.stopMove);
  }

  private destroyed(): void {
    this.stopEvents();
    const element: any = this.$el.firstChild;
    element.removeEventListener('touchstart', this.touchStart, false);
    element.removeEventListener('touchmove', this.touchMove, false);
    element.removeEventListener('touchcancel', this.touchStop, false);
    element.removeEventListener('touchend', this.touchStop, false);
  }
}// TODO: add test
</script>

<style lang="stylus">
.swiper
  height 100%
  width 100%
  display flex
  justify-content center
  align-items center
  user-select none
</style>
