declare module 'vuedraggable' {
    import Vue from 'vue';

    export default class extends Vue {
    }

    interface DragChangeEvent<T> {
        moved: DragMovedEvent<T>;
    }

    interface DragAddedEvent<T> {
        element: T;
        newIndex: number;
    }

    interface DragRemovedEvent<T> {
        element: T;
        oldIndex: number;
    }

    interface DragMovedEvent<T> {
        element: T;
        oldIndex: number;
        newIndex: number;
    }
}