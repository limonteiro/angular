import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

//Metadado pure
//Não fazer este tipo de pipe no projeto real.
@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

}
