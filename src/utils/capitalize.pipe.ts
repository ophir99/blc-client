import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase',
})
export class CapitalizePipe implements PipeTransform {
  transform(text): string {
    if (typeof text === 'string') {
      return this.capitalize(text);
    }
    return '';
  }

  capitalize(text: string): string {
    const words = text.split(' ');
    return words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
}
