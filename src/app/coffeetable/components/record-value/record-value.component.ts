import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

import {
  Collection,
  Field,
  Record,
} from '../../store';

@Component({
  selector: '[cfRecordValue]',
  styleUrls: ['./record-value.component.scss'],
  templateUrl: './record-value.component.html',
})
export class RecordValueComponent implements OnInit {

  @Input() public record !: Record.Schema;
  @Input() public field !: Field.Field;

  public value: Field.displayValue;

  constructor(
    private _store: Store<Collection.State>,
  ) {}

  public ngOnInit() {
    this.value = this.field.getValue(this.record);
  }

  public update(value: string) {
    this._store.dispatch(Record.Actions.updateOne({
      changes: {
        data: {
          ...this.record.data,
          [this.field.id]: value,
        },
      },
      id: this.record.id,
    }));
  }

}
