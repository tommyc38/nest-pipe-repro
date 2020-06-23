
import {HttpClientModule } from '@angular/common/http';
import { TransComponent } from './trans.component';

export default {
  title: 'TransComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [HttpClientModule],
  },
  component: TransComponent,
  props: {
  }
})
