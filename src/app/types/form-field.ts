export class FormField {
  constructor(
    public key: string,
    public title: string | { [key: string]: string },
    public type: string,
    public attributes: any
  ) {}
}
