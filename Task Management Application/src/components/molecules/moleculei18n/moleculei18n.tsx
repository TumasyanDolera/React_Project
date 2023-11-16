import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Box, Button, MenuButton, MenuList, MenuItem, Menu, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface ITranslate {
    en: object
    ru: object
    am: object
}
const locales: ITranslate = {
    en: { title: 'English' },
    ru: { title: 'Russian' },
    am: { title: 'Armenian' },
}

const Translate = () => {
    const { t, i18n } = useTranslation();

    return (
        <Menu >
            <MenuButton as={Button}
                colorScheme='purple.500'
                color="white"
                fontSize={'lg'}
                fontWeight={400}
                type="submit"
                _hover={{
                    bg: 'purple',
                    boxShadow: 'lg'
                }}

                rightIcon={<ChevronDownIcon />}>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://cdn.iconscout.com/icon/premium/png-256-thumb/language-2780793-2306634.png?f=webp'
                    alt='English'
                    mr='12px'
                />
            </MenuButton>
            <MenuList  >
                {Object.keys(locales).map((locale) => (
                    <Box key={locale}>
                        <MenuItem onClick={() => i18n.changeLanguage(locale)}>
                            {/* <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src='https://projectbritain.com/images/uk.jpg'
                                alt='English'
                                mr='12px'
                          /> */}
                            {locales[locale].title}
                        </MenuItem>
                        {/* <MenuItem onClick={() => i18n.changeLanguage(locale)}>
                            <Image
                                boxSize='2.3rem'
                                borderRadius='full'
                                src='https://cdn3.iconfinder.com/data/icons/world-flags-circular-1/512/106-Russia_Russian_RUS_country_flag_-512.png'
                                alt='English'
                                mr='12px'
                            />
                            {locales[locale].en}
                        </MenuItem>
                        <MenuItem onClick={() => i18n.changeLanguage(locale)}>
                            <Image
                                boxSize='2.3rem'
                                borderRadius='full'
                                src='https://cdn3.iconfinder.com/data/icons/world-flags-circular-1/512/91-Armenia_ARM_Armenian_Yerevan_country_flag_-512.png'
                                alt='English'
                                mr='12px'
                            />
                            {locales[locale].title3}
                        </MenuItem> */}
                    </Box>
                ))
                }
            </MenuList>
            <Box>{t("signin")}</Box>
        </Menu>
    )
}

export default function WrappedApp() {
    return (
        <Suspense fallback={<Box>Loading ...</Box>}>
            <Translate />
        </Suspense>
    )
}

