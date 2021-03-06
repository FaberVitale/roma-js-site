import { createEffect, createSignal, For, JSX, Show } from 'solid-js';
import {
  LangSelector,
  LangSelectorProps,
} from 'components/LangSelector/LangSelector';
import type { Lang } from '@i18n/config';
import hamburgerMenuImg from 'media/hamburger-menu-closed.svg';
import { MenuModal } from './components/MenuModal';
import { Transition } from 'solid-transition-group';
import styles from './navbar.module.scss';
import { createAppBreakpoints } from 'utils/media-queries';
import { navbarLinks, preventSelfNavigation } from 'utils/routing';

export interface NavbarProps {
  lang: Lang;
  relativePageUrl: string;
  class?: JSX.IntrinsicElements['div']['class'];
  classList?: JSX.IntrinsicElements['div']['classList'];
  urlMap: LangSelectorProps['urlMap'] | null | undefined;
}

export function Navbar(props: NavbarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const matches = createAppBreakpoints();
  const isMenuVisible = () => !matches.lg && isMenuOpen();
  const navLinksEntries = () => Object.entries(navbarLinks[props.lang] ?? {});

  return (
    <>
      <div
        id="rmjs-navbar"
        class={styles.navbar}
        classList={{
          ...props.classList,
          [props.class as string]: !!props.class,
        }}
      >
        <div class={styles.leftSide}>
          <Show when={props.urlMap}>
            {(urlMap) => (
              <LangSelector activeLang={props.lang} urlMap={urlMap} />
            )}
          </Show>
        </div>
        <div
          classList={{
            [styles.rightSideDesktop]: true,
            [styles.rightSide]: true,
          }}
        >
          <nav class={styles.navbarNav}>
            <ul>
              <For each={navLinksEntries()}>
                {([label, href]) => (
                  <li>
                    <a
                      aria-current={
                        props.relativePageUrl === href ? 'page' : undefined
                      }
                      onClick={preventSelfNavigation}
                      class="btn btn-small btn-primary"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                )}
              </For>
            </ul>
          </nav>
        </div>
        <button
          type="button"
          classList={{
            [styles.hamburgerMenuBtn]: true,
            [styles.rightSide]: true,
          }}
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <img aria-hidden="true" alt="menu" src={hamburgerMenuImg} />
          <span class="visually-hidden">Open menu</span>
        </button>
      </div>
      <Transition name="fade" appear>
        <Show when={isMenuVisible()}>
          <MenuModal
            relativePageUrl={props.relativePageUrl}
            activeLang={props.lang}
            urlMap={props.urlMap}
            onCloseButtonClick={() => setIsMenuOpen(false)}
          />
        </Show>
      </Transition>
    </>
  );
}
