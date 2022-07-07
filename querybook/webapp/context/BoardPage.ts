import React from 'react';

import { BoardItemType } from 'const/board';

export interface IBoardPageContextType {
    isEditMode: boolean;
    isCollapsed: boolean;

    onDeleteBoardItem: (
        itemId: number,
        itemType: BoardItemType
    ) => Promise<void>;
}

export const BoardPageContext =
    React.createContext<IBoardPageContextType>(null);
