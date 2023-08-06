export class UserDto {
  constructor(user) {
    (this.firstName = user.firstName), (this.middleName = user.middleName);
    (this.paternalLastName = user.paternalLastName),
      (this.maternalLastName = user.maternalLastName),
      (this.dateOfBirth = user.dateOfBirth),
      (this.email = user.email),
      (this.cellphone = user.cellphone);
  }
}
