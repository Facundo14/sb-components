import './myLabel.css';

export interface MyLabelProps {
  /**
   * Este es el texto que se mostrara en el label
   */
  label: string;
  /**
   * Este es tamaño que va a tener el label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Si va a ser toda la palabra capitalizada
   */
   allCaps: boolean;
   /**
   * Este el color que va a tener el label
   */
  color: 'primary' | 'secondary' | 'tertiary';
  /**
   * What background color to use
   */
   fontColor?: string;
}


export const MyLabel = ( {
  label = 'No label',
  size = 'normal',
  color = 'primary',
  fontColor,
  allCaps = false
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${ color }`} style={{ color: fontColor }} >
      {
        allCaps ? label.toUpperCase() : label
      }
    </span>
  )
}
