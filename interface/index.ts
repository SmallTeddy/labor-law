export interface ItemType {
  tier: 'title' | 'content' | 'br';
  content: string;
  value: string;
  name?: string;
}
