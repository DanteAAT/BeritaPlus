import { Autocomplete, Group, Burger, rem, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';
import classes from '@/styles/HeaderMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';  



const links = [
    { link: '/', label: 'Home' },
    { link: '/berita', label: 'Berita'    },
  ];

 
  export function HeaderMenu() {
    const [opened, { toggle }] = useDisclosure(false);
    const router = useRouter();
    // const items = links.map((link) => (
    //   <a
    //     key={link.label}
    //     href={link.link}
    //     className={classes.link}
    //     onClick={(event) => event.preventDefault()}
    //   >
    //     {link.label}
    //   </a>
    // ));

    const handleImageClick = () => {
      router.push('/');
    };
  
  
    return (
      <div>
      <header className={classes.header}>
      <div onClick={handleImageClick} className={classes.imageWrapper}>
          <Image src="/Icon.png" width={100} height={80} alt="Picture of the author" />
        </div>
        <div className={classes.inner}>
          <Group gap={30} className={classes.leftGroup}>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          </Group>
          
          <Group className={classes.centerGroup}>
          {links.map((link) => (
              <Link key={link.label} href={link.link} className={classes.link}>
                {link.label}
              </Link>
            ))}
          </Group>
          
          {/* <Group className={classes.rightGroup}>
          </Group> */}
        </div>
        <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        {/* <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group> */}
      </header>
      </div>
    );
}
  