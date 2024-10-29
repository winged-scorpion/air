export const FORM_TEXT = {
    name: 'Наименование организации / ИП',
    phone: 'Контактный телефон',
    select: {
        head: 'Тип помещения',
        list: ['Тип помещения1', 'Тип помещения2', 'Тип помещения3', 'Тип помещения4']
    },
    address: 'Адрес',
}

export const INPUT_TYPE = {
    text: 'text',
    number: 'number'
}
import * as yup from "yup";

export const schemaVeeValidate = yup.object({
    name: yup.string().required('Укажите название организаций'),
    phone: yup.string().required('Укажите телефон'),
});
