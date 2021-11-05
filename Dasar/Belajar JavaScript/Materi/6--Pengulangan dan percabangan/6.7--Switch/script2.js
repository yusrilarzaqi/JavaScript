var item = prompt('Masukan makanan / minuman \n (nasi,daging,susu,hamburger,softdrink)');

switch (item) {
   case 'nasi':
   case 'daging':
   case 'susu' :
      alert('Makanan Sehat !!');
      break;
   case 'hamburger' :
   case 'softdrink' :
      alert('Makanan Tidak Sehat !!');
      break;
   default:
      alert('Yang anda masukan salah !!');
      break;
}