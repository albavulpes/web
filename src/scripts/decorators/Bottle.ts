import 'reflect-metadata';
import {BottleContainer} from '../bottle/BottleContainer';

export function Bottle(): PropertyDecorator {
    return (prototype: any, propertyKey: string) => {
        const serviceTypeName = Reflect.getMetadata('design:type', prototype, propertyKey);

        console.log(serviceTypeName);

        if (delete prototype[propertyKey]) {
            prototype[propertyKey] = (BottleContainer.container as any)[serviceTypeName];
        }
    };
}