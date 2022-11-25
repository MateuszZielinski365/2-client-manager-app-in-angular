import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/user';


@Pipe({
  name: 'filterCustomers'
})
export class FilterPipe implements PipeTransform {

  transform(user: User[], filterText: string) {
    
    if (user.length === 0 || filterText === '') {
      return user;
    } else {
      return user.filter((user) => {
        return user.first_name.toLowerCase() === filterText.toLowerCase()

      })
    }
  }
}
