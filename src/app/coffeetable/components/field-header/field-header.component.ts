import {
  Component,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';

import {
  Collection,
  Field,
} from '../../store';

@Component({
  selector: '[cfFieldHeader]',
  styleUrls: ['./field-header.component.scss'],
  templateUrl: './field-header.component.html',
})
export class FieldHeaderComponent {

  @Input() public field !: Field.Field;

  constructor(
    private _store: Store<Collection.State>,
  ) {}

  public update(value: string) {
    this._store.dispatch(Field.Actions.updateOne({
      changes: {
        getter: value,
      },
      id: this.field.id,
    }));
  }

}
