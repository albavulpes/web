import 'reflect-metadata';
import {BottleContainer} from '../bottle/BottleContainer';

export function Inject(): PropertyDecorator {
    return (prototype: any, propertyKey: string) => {
        const serviceType = Reflect.getMetadata('design:type', prototype, propertyKey) as Function;

        if (delete prototype[propertyKey]) {
            Object.defineProperty(prototype, propertyKey, {
                get() {
                    return (BottleContainer.container as any)[serviceType.name];
                }
            });
        }
    };
}