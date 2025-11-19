
export interface ChecklistItemType {
  id: string;
  text: string;
  done: boolean;
}

export interface ChecklistSectionType {
  title: string;
  description: string;
  items: ChecklistItemType[];
}
