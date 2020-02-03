import {
  Component,
  Input,
} from '@angular/core';

import * as Coffeetable from 'src/app/coffeetable/models';

@Component({
  selector: 'cf-record',
  styleUrls: ['./record.component.scss'],
  templateUrl: './record.component.html',
})
export class RecordComponent {

  @Input() public record: Coffeetable.Record;

}
