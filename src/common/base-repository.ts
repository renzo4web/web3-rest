import * as DataStore from 'nedb';

export default class Repository<T> {
  public dataSource = new DataStore({
    inMemoryOnly: true,
  });

  public save(data: T): Promise<T> {
    return new Promise((resolve, reject) => {
      this.dataSource.insert(data, (error, document) => {
        if (error) {
          reject(error);
        }

        resolve(document);
      });
    });
  }

  public getById(_id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dataSource.findOne({ _id }, (error, document) => {
        if (error) {
          reject(error);
        }

        resolve(document);
      });
    });
  }

  public getByDestination(destination: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dataSource.findOne({ destination }, (error, document) => {
        if (error) {
          reject(error);
        }

        resolve(document);
      });
    });
  }

  public getAll(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.dataSource.find({}, {}, (error, documents) => {
        if (error) {
          reject(error);
        }

        resolve(documents);
      });
    });
  }

  public updateById(_id: string, data: T): Promise<T> {
    return new Promise((resolve, reject) => {
      this.dataSource.update({ _id }, data, {}, error => {
        if (error) {
          reject(error);
        }

        this.getById(_id).then(value => resolve(value));
      });
    });
  }

  public deleteById(_id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.dataSource.remove({ _id }, error => {
        if (error) {
          reject(error);
        }

        resolve(_id);
      });
    });
  }
}
