import {atom, selector} from 'recoil';

export const todosAtom = atom({
    key: 'todosAtom',
    default: [
        {
            id: 1,
            title: '会議資料作成',
            isDone: false,
        },
    ],
});

export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get: ({get}) => {
        const todo = get(todosAtom);
        return todo.at(-1)?.id ?? 0;
    },
});
