export interface LinkOptionButtonProps {
  active: 'username' | 'random';
  handleActive: (active: LinkOptionButtonProps['active']) => void;
}
