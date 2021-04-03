class QA {
  name: string;
  department: string;
  private _title: string;
  get title(): string  {
    return this._title
  }
  set title(newTitle: string){
    this._title = newTitle.toUpperCase();
  }
}

export default QA