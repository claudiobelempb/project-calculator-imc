export const convertMaskPrice = (price: string): string => {
  if (!price) {
    return '';
  }
  return price.replace('.', '').replace(',', '.');
};

// export const maskPrice = (price: string) => {
//   const p = price.replace(/\D/g, '');
//   const v = ((parseInt(p) / 100).toFixed(2) + '').split('.');

//   const m: any = v[0]
//     .split('')
//     .reverse()
//     .join('')
//     .match(/.{1,3}/g);

//   for (let i = 0; i < m.length; i++) m[i] = m[i].split('').reverse().join('') + '.';

//   const r = m.reverse().join('');

//   return r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
// };

/*
	Create a Mask in an email address
	This function create a mask using a valid email address.
	This is usefull when someone need to confirm the email used in a system
	Author: Gabriel Froes - https://gist.github.com/gabrielfroes
 */
// const emailMask = (email: string) => {
//   let maskedEmail = email.replace(/([^@\.])/g, '*').split('');
//   let previous = '';
//   for (i = 0; i < maskedEmail.length; i++) {
//     if (i <= 1 || previous == '.' || previous == '@') {
//       maskedEmail[i] = email[i];
//     }
//     previous = email[i];
//   }
//   return maskedEmail.join('');
// };

// Usage:
//	console.log ( emailMask("my.email@mydomain.com") );
// Output: my.e****@m*******.c**

export const maskToLowerCase = (value: string) => {
  return value.toLowerCase();
};

export const maskToUpperCase = (value: string) => {
  return value.toUpperCase();
};

export const maskDateBirth = (data: string) => {
  data = data.replace(/\D/g, '');
  data = data.replace(/(\d{2})(\d)/, '$1/$2');
  data = data.replace(/(\d{2})(\d)/, '$1/$2');
  return data;
};

/*Função que permite apenas numeros*/
export const onlyAllowsNumber = (value: string) => {
  return value.replace(/\D/g, '');
};

/*Função que permite apenas numeros*/
export const AllowsNumber = (value: string) => {
  return value.replace(/\d{1,5}$|(?=^.{1,5}$)^\d+\.\d{0,2}$/g, '');
};

/*Função que padroniza telefone (11) 4184-1241*/
export const maskPhone = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d\d)(\d)/g, '($1) $2');
  value = value.replace(/(\d{4})(\d)/, '$1-$2');
  return value;
};

/*Função que padroniza telefone (11) 41841241*/
export const TelefoneCall = (v: string) => {
  v = v.replace(/\D/g, '');
  v = v.replace(/^(\d\d)(\d)/g, '($1) $2');
  return v;
};

/*Função que padroniza CPF*/
// export const maskCpf = (cpf: string) => {
//   cpf = cpf.replace(/\D/g, '');
//   cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
//   cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
//   cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
//   return cpf;
// };

export const maskCpf = (value: string) => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

/*Função que padroniza CEP*/
export const maskCep = (value: string) => {
  value = value.replace(/D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  return value;
};

/*Função que padroniza CNPJ*/
export const Cnpj = (v: string) => {
  v = v.replace(/\D/g, '');
  v = v.replace(/^(\d{2})(\d)/, '$1.$2');
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
  v = v.replace(/(\d{4})(\d)/, '$1-$2');
  return v;
};

export const maskCnpj = (value: string) => {
  return value
    .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1'); // captura os dois últimos 2 números, com um - antes dos dois números
};

/*Função que permite apenas numeros Romanos*/
export const maskRomanos = (value: string) => {
  value = value.toUpperCase();
  value = value.replace(/[^IVXLCDM]/g, '');

  while (
    value.replace(
      /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,
      '',
    ) != ''
  )
    value = value.replace(/.$/, '');
  return value;
};

/*Função que padroniza o Site*/
// export const maskSite = (value: string) => {
//   value = value.replace(/^http:\/\/?/, '');
//   let dominio = value;
//   let caminho = '';
//   if (value.indexOf('/') > -1) dominio = value.split('/')[0];
//   caminho = value.replace(/[^\/]*/, '');
//   dominio = dominio.replace(/[^\w\.\+-:@]/g, '');
//   caminho = caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g, '');
//   caminho = caminho.replace(/([\?&])=/, '$1');
//   if (caminho != '') dominio = dominio.replace(/\.+$/, '');
//   value = 'http://' + dominio + caminho;
//   return value;
// };

/*Função que padroniza DATA*/
export const maskdata = (value: string) => {
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  return value;
};

/*Função que padroniza DATA*/
export const maskHora = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1:$2');
  return value;
};

/*Função que padroniza valor monétario*/
export const maskValor = (value: string) => {
  value = value.replace(/\D/g, ''); //Remove tudo o que não é dígito
  value = value.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/, '$1.$2');
  // value = value.replace(/(\d{3})(\d)/g, '$1,$2');
  value = value.replace(/(\d)(\d{2})$/, '$1.$2'); //Coloca ponto antes dos 2 últimos digitos
  return value;
};

// export const maskPrice = (value: string) => {
//   value = value.replace(/\D/g, '');
//   const v = ((parseInt(value) / 100).toFixed(2) + '').split('.');

//   const m: string[] = v[0]
//     .split('')
//     .reverse()
//     .join('')
//     .match(/.{1,3}/g);

//   for (let i = 0; i < m.length; i++)
//     m[i] = m[i].split('').reverse().join('') + '.';

//   const r = m.reverse().join('');

//   value = r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
//   return value;
// };

/*Função que padroniza Area*/
export const maskArea = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1.$2');
  return value;
};
