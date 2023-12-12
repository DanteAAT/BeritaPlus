import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitterlogo, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '@/styles/FooterCentered.module.css';
import Image from 'next/image';

const data = [
  {
    title: 'Tentang Kami',
    links: [
      { label: 'Alamat: jln.Bumi no 2', link: '#' },
      { label: 'Telp: 081647364758', link: '#' },
      { label: 'Senin - Sabtu', link: '#' },
      { label: '24 Jam Non Stop', link: '#' },
    ],
  },
  {
    title: 'Jaringan Kami',
    links: [
      { label: 'Tempo.co', link: '#' },
      { label: 'CNN Indonesia', link: '#' },
      { label: 'Kompas.com', link: '#' },
      { label: 'Antaranews.com', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="/Logo.png" width={100} height={80} alt="Picture of the author" />
          {/* <MantineLogo size={30} /> */}
          <Text size="xs" c="white" className={classes.description}>
            Berita terkini yang siap kalian baca
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
    </footer>
  );
}