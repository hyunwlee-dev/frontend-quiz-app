import { useTheme, useThemeDispatch } from "@/app/contexts/theme.context";
import { ThemeButton } from "@/app/ui/theme-button";
import Container from "@/app/ui/container";
import { Icon } from "@/app/ui/icon";
import clsx from "clsx";
import styles from "./header.module.css";

interface IProps {
  type: 'none' | 'html' | 'css' | 'js' | 'accessibility';
}

/**
 *  header 컴포넌트
 */
export function Header({
  type = 'none',
}: IProps) {
  const theme = useTheme();
  const dispatch = useThemeDispatch();
  return (
    <Container as='header' className={clsx(styles.header, { [styles['item-to-end']]: type === 'none' })} >
      {type !== 'none' &&
        <div className={styles['left-wrapper']}>
          <Icon type='img' iconName={type} />
          <h2 className={styles.heading2}>
            {type === 'html' && 'HTML'}
            {type === 'css' && 'CSS'}
            {type === 'js' && 'JavaScript'}
            {type === 'accessibility' && 'Accessibility'}
          </h2>
        </div>
      }
      <ThemeButton
        theme={theme}
        onChange={() => dispatch({ type: 'toggle' })}
      />
    </Container >
  );
}
