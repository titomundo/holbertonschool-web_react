import { RowID } from "./interface";
import { RowElement } from "./interface";

declare function insertRow(row: object): number;
declare function deleteRow(rowId: number): void;
declare function updateRow(rowId: number, row: object): number;
