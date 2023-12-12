import { Container, Title, Text, Button } from '@mantine/core';
import classes from '@/styles/landingPage.module.css';
import Link from 'next/link';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Selamat Datang di{' '}
              Berita
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: '#0a63b4'}}
              >
                Plus
              </Text>
              {/* Website Berita */}
            </Title>

            <Text className={classes.description} mt={30}>
            Berita Terkini Langsung di Ujung Jari Dapatkan akses instan ke berita terbaru di sini. Kami menyajikan informasi terkini dari berbagai kategori tanpa ribet.
            </Text>

            <Link href="/berita" passHref>
  <Button
    variant="gradient"
    gradient={{ from: '#0a63b4', to: '#333333' }}
    size="xl"
    className={classes.control}
    mt={40}
  >
    Baca Sekarang!
  </Button>
</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}