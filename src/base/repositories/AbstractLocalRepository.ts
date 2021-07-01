import AsyncStorage from '@react-native-async-storage/async-storage';

export default abstract class AbstractLocalRepository {
  abstract tableName(): string;

  get = async (): Promise<any> => {
    const data = await AsyncStorage.getItem(this.tableName());
    return data ? JSON.parse(data) : null;
  };

  // getById

  set = async (data: any) => {
    return AsyncStorage.setItem(this.tableName(), JSON.stringify(data));
  };

  update = async (data: any) => {
    let res = await this.get();

    if (res) {
      for (let k in data) {
        res[k] = data[k];
      }
    }

    return await this.set(res);
  };

  removeAll = async () => {
    return AsyncStorage.removeItem(this.tableName());
  };

  // remove
}
