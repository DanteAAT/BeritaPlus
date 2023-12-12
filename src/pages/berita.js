import { HeaderMenu } from '@/components/layout/HeaderMenu';
import { FooterLinks } from '@/components/layout/Footer';
import ListBerita from '@/components/layout/listBerita';
// import { listBerita } from '@/components/layout/listBerita';


     {/* <UserInfoIcons/> */}
            {/* <TableSelection/>        */}
export default function Berita(){
    return(
        <div>
            <HeaderMenu/>
            <ListBerita/>
            <FooterLinks/>    
        </div>
    )
}