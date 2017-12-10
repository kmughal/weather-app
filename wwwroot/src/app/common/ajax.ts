export class Ajax {
  static async json(url: string) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }
}
