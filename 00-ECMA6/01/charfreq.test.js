const DefaultMap = require('./charfreq'); // 导入要测试的类
describe('DefaultMap', () => {
    test('should return default value when key does not exist', () => {
        const defaultMap = new DefaultMap('default');
        expect(defaultMap.get('key')).toBe('default');
    });

    test('should return the value when key exists', () => {
        const defaultMap = new DefaultMap('default');
        defaultMap.set('key', 'value');
        expect(defaultMap.get('key')).toBe('value');
    });

    test('should return default value when key is deleted', () => {
        const defaultMap = new DefaultMap('default');
        defaultMap.set('key', 'value');
        defaultMap.delete('key');
        expect(defaultMap.get('key')).toBe('default');
    });
});
