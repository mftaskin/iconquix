const iconQuixDataBrands  = {
    'android':'<path d="m5.9905 9.7205a.068.068 90 00-2.4905 0l0 5.185a.068.068 90 002.4905 0zm14.5095 0a.068.068 90 00-2.4905 0l0 5.185a.068.068 90 002.4905 0zm-11.7895-7.684a.068.068 90 00-.306.1785l.8755 1.581c-1.683.8755-2.822 2.5415-2.8305 4.4625l11.101 0c0-1.921-1.139-3.587-2.8305-4.4625l.8755-1.581a.068.068 90 00-.306-.1785l-.884 1.6065c-.731-.323-1.547-.5015-2.4055-.5015-.8585 0-1.6745.1785-2.397.5015l-.8925-1.6065zm-2.261 6.6555 0 8.041a1.3345 1.3345 90 001.343 1.343h.8925v2.7455a.068.068 90 002.4905 0v-2.7455h1.6575v2.7455a.068.068 90 002.482 0v-2.7455l.8925 0a1.3345 1.3345 90 001.343-1.343l0-8.041-11.101 0 0 0zm3.451-2.9325a.068.068 90 00-.9265 0 .068.068 90 00.9265 0zm5.1255 0a.068.068 90 00-.9265 0 .068.068 90 00.9265 0z" fill="currentColor" fill-rule="evenodd" />',
    'apple':'<path d="m19.62 8.82c-.12.09-2.16 1.24-2.16 3.81 0 2.97 2.61 4.02 2.68 4.04-.01.06-.41 1.44-1.37 2.84-.86 1.23-1.75 2.46-3.11 2.46s-1.71-.79-3.28-.79c-1.53 0-2.07.82-3.32.82s-2.11-1.14-3.11-2.54c-1.16-1.64-2.09-4.2-2.09-6.62 0-3.89 2.53-5.95 5.02-5.95 1.32 0 2.42.87 3.25.87.79 0 2.02-.92 3.53-.92.57 0 2.62.05 3.97 1.98zm-4.68-3.63c.62-.74 1.06-1.76 1.02-3.19-1.01.04-2.22.67-2.94 1.52-.57.65-1.1 1.67-1.1 2.71 0 .16.03.31.04.36.06.01.17.03.27.03.91 0 2.05-.61 2.71-1.43z" fill="currentColor" fill-rule="evenodd" />',
    'behance':'<path d="m7.83 5.86c.58 0 1.11.04 1.6.18.49.08.89.27 1.25.49s.62.53.8.93c.18.4.27.89.27 1.42 0 .63-.13 1.16-.44 1.56-.27.4-.71.76-1.25 1.02.76.22 1.33.63 1.69 1.16s.57 1.2.57 1.96c0 .62-.13 1.15-.35 1.6-.22.44-.58.84-.98 1.11-.4.27-.89.49-1.43.62-.53.13-1.06.22-1.6.22l-5.96.01v-12.28h5.83zm-.36 4.98c.49 0 .89-.13 1.2-.35s.45-.63.45-1.12c0-.26-.05-.53-.14-.71-.08-.17-.21-.31-.4-.44-.17-.09-.35-.18-.57-.22-.22-.04-.45-.04-.71-.04h-2.58v2.89c0-.01 2.75-.01 2.75-.01zm.13 5.26c.27 0 .54-.05.76-.09.22-.05.45-.13.62-.27s.32-.27.45-.49c.09-.22.18-.49.18-.8 0-.63-.18-1.07-.54-1.39-.35-.26-.84-.4-1.42-.4h-2.93v3.43h2.88zm8.6-.05c.35.36.89.54 1.6.54.49 0 .93-.14 1.29-.36.36-.27.58-.54.66-.81h2.18c-.36 1.07-.89 1.83-1.6 2.32-.71.45-1.56.71-2.58.71-.71 0-1.33-.13-1.91-.36-.58-.22-1.03-.53-1.43-.98-.4-.4-.71-.89-.89-1.47-.22-.57-.31-1.19-.31-1.91 0-.67.09-1.29.31-1.87s.54-1.07.94-1.51c.4-.4.89-.76 1.42-.98.58-.22 1.16-.36 1.87-.36.76 0 1.43.13 2 .45.58.31 1.03.66 1.38 1.2.36.49.63 1.06.81 1.68.09.63.13 1.25.09 1.96h-6.46c0 .73.27 1.39.63 1.75zm2.8-4.67c-.31-.32-.8-.49-1.38-.49-.4 0-.71.08-.98.22-.27.13-.44.31-.62.49-.18.17-.27.4-.31.62-.05.22-.09.4-.09.58h4c-.09-.66-.31-1.11-.62-1.42zm-3.92-4.67h4.99v1.2h-4.99v-1.2z" fill="currentColor" fill-rule="evenodd" />',
    'blogger':'<path d="m20.65 9.49h-1.21c-.65 0-1.21-.56-1.21-1.21 0-3.44-2.79-6.23-6.23-6.23h-3.72c-3.44 0-6.23 2.79-6.23 6.23v7.44c0 3.44 2.79 6.23 6.23 6.23h7.44c3.44 0 6.23-2.79 6.23-6.23v-4.93c0-.74-.56-1.3-1.3-1.3zm-12.46-2.42h4.46c.65 0 1.21.56 1.21 1.21 0 .65-.56 1.21-1.21 1.21h-4.46c-.65 0-1.21-.56-1.21-1.21 0-.65.56-1.21 1.21-1.21zm7.62 9.86h-7.53c-.65 0-1.21-.56-1.21-1.21 0-.65.56-1.21 1.21-1.21h7.53c.65 0 1.21.56 1.21 1.21 0 .65-.56 1.21-1.21 1.21z" fill="currentColor" fill-rule="evenodd" />',
    'chrome':'<path d="m2 12c0-1.82.49-3.53 1.34-5.04l4.29 7.47c.85 1.53 2.49 2.57 4.37 2.57.56 0 1.06-.09 1.59-.26l-2.98 5.16c-4.86-.67-8.61-4.85-8.61-9.9zm14.26 2.56c.48-.75.74-1.66.74-2.56 0-1.49-.66-2.83-1.69-3.75h5.96c.47 1.16.73 2.43.73 3.75 0 5.52-4.48 9.96-10 10l4.26-7.44zm4.4-7.56h-8.66c-2.46 0-4.44 1.72-4.9 4.01l-2.98-5.16c1.83-2.35 4.68-3.85 7.88-3.85 3.7 0 6.93 2.01 8.66 5v0zm-12.1 5a1 1 0 006.88 0 1 1 0 00-6.88 0z" fill="currentColor" fill-rule="evenodd" />',
    'codepen':'<path d="m12 2-9.88 6.6 0 6.79 9.88 6.61 9.88-6.61 0-6.79zm-.76 2.33 0 4.13-3.92 2.64-3.06-2.07zm1.52 0 6.99 4.7-3.07 2.07-3.92-2.64zm-.76 5.46 3.3 2.21-3.3 2.21-3.3-2.21zm-8.36.64 2.33 1.57-2.33 1.57zm16.72 0 0 3.14-2.32-1.57zm-13.01 2.47 3.89 2.64 0 4.13-6.98-4.7zm9.31 0 3.09 2.07-6.99 4.7 0-4.13z" fill="currentColor" fill-rule="evenodd" />',
    'deviantart':'<path d="m18 2h-3.44l-.37.36-1.75 3.35-.51.29h-5.93v5h3.17l.33.33-3.5 6.67v4h3.44l.37-.37 1.76-3.35.5-.28h5.93v-5h-3.18l-.32-.32 3.5-6.68z" fill="currentColor" fill-rule="evenodd" />',
    'discord':'<path d="m18.65 5.86a15 15 0 00-3.93-1.21l-.51 1.02a14 14 0 00-4.36 0l-.51-1.02a15 15 0 00-3.94 1.21c-2.48 3.69-3.16 7.28-2.82 10.82a15.86 15.86 9 004.83 2.42 11.65 11.65 0 001.03-1.66 10.26 10.26 0 01-1.63-.78l.4-.3a11.33 11.33 0 009.65 0l.4.3a10.3 10.3 0 01-1.63.78 11.55 11.55 0 001.03 1.66 15.79 15.79 0 004.84-2.42c.38-4.11-.69-7.67-2.85-10.82zm-9.78 8.64a1.5 1.67 0 000-3.81 1.5 1.67 0 000 3.81zm6.33 0a1.5 1.67 0 000-3.81 1.5 1.67 0 000 3.81z" fill="currentColor" fill-rule="evenodd" />',
    'dribbble':'<path d="m11.99 21.91c-5.47 0-9.92-4.45-9.92-9.92s4.45-9.92 9.92-9.92c5.47 0 9.92 4.45 9.92 9.92s-4.45 9.92-9.92 9.92zm8.37-8.56c-.29-.09-2.63-.79-5.28-.37 1.1 3.05 1.56 5.53 1.64 6.05 1.91-1.29 3.26-3.33 3.64-5.68zm-5.06 6.45c-.13-.74-.62-3.33-1.81-6.42-4.84 1.68-6.55 5-6.7 5.31 1.43 1.12 3.24 1.79 5.2 1.79 1.17 0 2.29-.24 3.31-.68zm-9.6-2.13c.19-.33 2.57-4.16 7.22-5.69-.22-.49-.45-.97-.69-1.44-4.23 1.26-8.34 1.21-8.71 1.2 0 2.44.82 4.43 2.18 5.93zm-2.01-7.4c.39 0 3.88.02 7.84-1.03-1.41-2.5-2.92-4.6-3.14-4.91-2.37 1.12-4.14 3.3-4.7 5.93zm6.32-6.5c.23.31 1.77 2.4 3.16 4.96 3.01-1.13 4.29-2.85 4.44-3.06-1.5-1.34-3.47-2.14-5.62-2.14-.68 0-1.35.08-1.98.24zm8.54 2.88c-.18.23-1.6 2.06-4.73 3.33.27.58.54 1.19.74 1.67 2.82-.35 5.62.22 5.9.28-.01-2.01-.72-3.84-1.91-5.28z" fill="currentColor" fill-rule="evenodd" />',
    'dropbox':'<path d="m6.94 3.5-5.05 3.22 5.05 3.21 5.06-3.21 5.06 3.21 5.05-3.21-5.05-3.22-5.06 3.22-5.06-3.22zm0 12.86-5.05-3.21 5.05-3.22 5.06 3.22-5.06 3.21zm5.06-3.21 5.06-3.22 5.05 3.22-5.05 3.21-5.06-3.21zm0 7.5-5.06-3.22 5.06-3.21 5.06 3.21-5.06 3.22z" fill="currentColor" fill-rule="evenodd" />',
    'edge':'<path d="m2 11a10.06 10.06 0 0110-9 11.43 11.43 0 017.47 2.84 9.8 9.8 0 012.46 4.55s.67 3.44-2.17 5.22a6.62 6.62 0 01-4.14.62 4.25 4.25 0 01-1.88-.79.46.46 0 01.09-.67 2.43 2.43 0 00.67-1.71 5.12 5.12 0 00-2.68-4.4 7.53 7.53 0 00-6.52-.36 5.98 5.98 0 00-3.3 3.7zm12.2 10.75a10.05 10.05 0 01-9.74-3.09 12.16 12.16 0 01-2.38-5.14 6.6 6.6 0 013.68-3.71 7.54 7.54 0 015.06-.05 6.5 6.5 0 00-3.55 5.68s-.21 6.64 6.93 6.31zm-4.51-8.35a6.16 6.16 0 003.72 3.84 8.25 8.25 0 006.59-.24.3.3 0 01.43.41 9.74 9.74 0 01-4.1 3.63s-3.97-.32-5.6-2.88a8.1 8.1 0 01-1.04-4.76z" fill="currentColor" fill-rule="evenodd" />',
    'facebook':'<path d="m10.42 20.5v-7.74h-2.6v-3.01h2.6v-2.5a4.6 4.6 0 01.35-1.63 3.8 3.8 0 011.1-1.4 4.2 4.2 0 012.01-.69s1.09-.02 1.67.02l1.09.08v2.7h-1.67a2.17 2.17 0 00-.77.14 1 1 0 00-.53.53 2 2 0 00-.12.61v2.14h2.99l-.39 2.99h-2.6v7.76z" fill="currentColor" fill-rule="evenodd" />',
    'facebook-alt':'<path d="m12.67 22v-7.74h-2.6v-3.01h2.6v-2.5a4.6 4.6 0 01.35-1.63 3.8 3.8 0 011.1-1.4 4.2 4.2 0 012.01-.69s1.09-.02 1.67.02l1.09.08v2.7h-1.67a2.17 2.17 0 00-.77.14 1 1 0 00-.53.53 2 2 0 00-.12.61v2.14h2.99l-.39 2.99h-2.6v7.76h4.7a1.5 1.5 0 001.5-1.5v-17a1.5 1.5 0 00-1.5-1.5h-17a1.5 1.5 0 00-1.5 1.5v17a1.5 1.5 0 001.5 1.5z" fill="currentColor" fill-rule="evenodd" />',
    'firefox':'<path d="m9.32 5.37a4.8 4.8 0 00-2.61 1.05l-.33-.24a4.8 4.8 0 013-1.18z" fill="currentColor" fill-rule="evenodd" /><path d="m0 10.3a1 1 0 0019.32 0c.01-2.5-.92-4.9-2.64-6.05.45.91.8 1.81.99 2.95-.97-2.71-4.1-4.87-4.97-7.2-2.04 1.21-3.11 3.2-3.38 5.37a4.8 4.8 0 014.6 2.46c-.51-.36-1.44-.72-2.33-.56a4 4 0 01-2.27 7.5c-1.85-.05-3.8-1.55-3.99-3.6.47-1.25 1.91-1.68 3.2-1.67.3 0 1.15-.83 1.16-1.07 0-.07-.86-.39-1.82-.99-.53-.3-.99-.96-1.44-1.23-.19-.68-.25-1.49-.02-2.36-1 .45-1.77 1.16-2.33 1.81-.39-.5-.36-2.08-.34-2.44-1.83.98-3.74 3.78-3.74 7.08z" fill="currentColor" fill-rule="evenodd" />',
    'github':'<path d="m8.94 21.31c.48.08.66-.21.66-.46 0-.23-.01-.98-.01-1.79-2.41.45-3.04-.58-3.23-1.12-.11-.28-.58-1.13-.98-1.36-.34-.18-.82-.62-.02-.64.76-.01 1.3.7 1.48.99.86 1.45 2.24 1.04 2.8.79.08-.62.33-1.04.61-1.28-2.14-.24-4.37-1.07-4.37-4.74 0-1.05.37-1.91.98-2.58-.09-.24-.43-1.23.1-2.55 0 0 .8-.25 2.64.99.77-.22 1.58-.33 2.4-.33.82 0 1.63.11 2.4.33 1.84-1.25 2.64-.99 2.64-.99.53 1.32.19 2.31.1 2.55.61.67.98 1.52.98 2.58 0 3.68-2.24 4.5-4.38 4.74.35.3.65.87.65 1.77 0 1.29-.01 2.32-.01 2.64 0 .25.18.55.66.46a9.6 9.6 0 006.54-9.11 1 1 0 00-19.2 0 9.6 9.6 0 006.56 9.11z" fill="currentColor" fill-rule="evenodd" />',
    'godot':'<path d="m10 2.75c-.9.2-1.79.48-2.62.9.02.74.07 1.44.16 2.16a6.68 6.68 0 00-1.87 1.37 17.34 17.34 90 00-1.75-1.02c-.65.7-1.26 1.46-1.76 2.31l1.2 1.72v5.21l3.22.31a.34.34 90 01.31.32l.1 1.41 2.79.2.19-1.3a.34.34 90 01.34-.29h3.37a.34.34 0 01.34.29l.19 1.3 2.79-.2.1-1.41a.34.34 90 01.31-.32l3.22-.31v-5.21l1.2-1.72c-.5-.85-1.11-1.61-1.76-2.31-.61.3-1.19.65-1.75 1.02a6.68 6.68 0 00-1.87-1.37c.1-.72.14-1.42.16-2.16-.83-.42-1.72-.7-2.62-.9a18.71 18.71 90 00-.97 1.9 6.68 6.68 90 00-2.06 0 18.53 18.53 90 00-.97-1.9zm-2.53 7.63a1.93 1.93 90 110 3.85 1.93 1.93 90 010-3.85zm9.06 0a1.93 1.93 90 110 3.85 1.93 1.93 90 010-3.85zm-8.88.76a1.28 1.28 90 100 2.56 1.28 1.28 90 000-2.56zm8.69 0a1.28 1.28 90 100 2.56 1.28 1.28 90 000-2.56zm-4.35.37c.34 0 .62.25.62.56v1.77c0 .31-.28.56-.62.56s-.62-.25-.62-.56v-1.77c0-.31.28-.56.62-.56zm-8.64 4.57c0 .31 0 .65 0 .71 0 3.04 3.85 4.49 8.64 4.51 4.79-.02 8.64-1.47 8.64-4.51 0-.07 0-.41.01-.71l-2.87.28-.1 1.42a.35.35 90 01-.32.32l-3.43.24a.34.34 90 01-.34-.29l-.2-1.32h-2.78l-.2 1.32a.34.34 90 01-.36.29l-3.4-.24a.34.34 90 01-.32-.32l-.1-1.42-2.87-.28z" fill="currentColor" fill-rule="evenodd" />',
    'google':'<path d="m21.91 10.12a10.5 10.5 90 01.18 1.88 10.5 10.5 0 01-10.09 10.5 10.5 10.5 90 010-21 10.5 10.5 90 017.03 2.74l-2.92 2.93a6.2 6.2 90 00-4.11-1.51 1 1 0 000 12.69 6.2 6.2 90 005.8-4.19h-5.8v-4.04h9.91z" fill="currentColor" fill-rule="evenodd" />',
    'google-play':'<path d="m14.69 11.14-8.61-8.63 10.95 6.28-2.34 2.35zm-10.86-9.14c-.5.27-.84.75-.84 1.38v17.21c0 .63.34 1.11.84 1.37l10.01-9.98-10.01-9.98zm16.59 8.8-2.3-1.33-2.56 2.51 2.56 2.52 2.34-1.33c.7-.56.7-1.81-.04-2.37zm-14.34 10.66 10.95-6.29-2.34-2.34-8.61 8.63z" fill="currentColor" fill-rule="evenodd" />',
    'huawei-appgallery':'<path d="m7.61 2c-4.11 0-5.61 1.5-5.61 5.6v8.78c0 4.1 1.5 5.62 5.61 5.62h8.76c4.11 0 5.63-1.52 5.63-5.62v-8.78c-.02-4.1-1.52-5.6-5.63-5.6zm3.11 11.59h.8l-.41-.94zm-.2.47-.24.54h-.54l1.15-2.61h.47l1.15 2.61h-.56l-.24-.54zm8.72.54h.52v-2.61h-.52zm-2.09-1.12h.97v-.48h-.97v-.53h1.4v-.48h-1.92v2.61h1.97v-.47h-1.45zm-2.08.31-.59-1.8h-.44l-.59 1.8-.58-1.8h-.56l.91 2.62h.44l.59-1.72.6 1.72h.44l.91-2.62h-.55zm-6.13-.3c0 .42-.21.65-.6.65-.38 0-.59-.23-.59-.67v-1.48h-.53v1.5c0 .73.4 1.15 1.12 1.15.72 0 1.13-.43 1.13-1.17v-1.48h-.53zm-2.99-1.5h.53v2.62h-.53v-1.07h-1.2v1.07h-.53v-2.62h.53v1.06h1.2zm6.04-3.33c-1.84 0-3.33-1.49-3.33-3.33h.47c0 1.58 1.28 2.86 2.86 2.86 1.58 0 2.86-1.28 2.86-2.86h.47c0 1.84-1.49 3.33-3.33 3.33" fill="currentColor" fill-rule="evenodd" />',
    'instagram':'<path d="m12 2.17c-2.67 0-3.01.01-4.06.06-1.04.05-1.76.21-2.38.46-.65.25-1.2.58-1.75 1.13-.54.55-.88 1.09-1.13 1.74-.25.63-.41 1.34-.46 2.39-.05 1.05-.06 1.38-.06 4.05 0 2.67.01 3 .06 4.05.05 1.05.22 1.76.46 2.39.25.64.59 1.19 1.13 1.74.55.55 1.1.88 1.75 1.13.62.25 1.34.41 2.38.46 1.05.05 1.39.06 4.06.06 2.67 0 3.01-.01 4.05-.06 1.05-.05 1.77-.21 2.39-.46.65-.25 1.2-.58 1.74-1.13.55-.55.89-1.1 1.14-1.74.24-.63.41-1.34.46-2.39.04-1.05.06-1.38.06-4.05 0-2.67-.02-3-.06-4.05-.05-1.05-.22-1.76-.46-2.39-.25-.65-.59-1.19-1.14-1.74-.54-.55-1.09-.88-1.74-1.13-.62-.25-1.34-.41-2.39-.46-1.05-.05-1.38-.06-4.05-.06zm5.25 5.76a1 1 0 000-2.36 1 1 0 000 2.36zm-5.25 9.12a1 1 0 000-10.1 1 1 0 000 10.1zm0-1.77a1 1 0 000-6.56 1 1 0 000 6.56z" fill="currentColor" fill-rule="evenodd" />',
    'instagram-outline':'<path d="m12 2.17c-2.67 0-3.01.01-4.06.06-1.04.05-1.76.21-2.38.46-.65.25-1.2.58-1.75 1.13-.54.55-.88 1.09-1.13 1.74-.25.63-.41 1.34-.46 2.39-.05 1.05-.06 1.38-.06 4.05 0 2.67.01 3 .06 4.05.05 1.05.22 1.76.46 2.39.25.64.59 1.19 1.13 1.74.55.55 1.1.88 1.75 1.13.62.25 1.34.41 2.38.46 1.05.05 1.39.06 4.06.06 2.67 0 3.01-.01 4.05-.06 1.05-.05 1.77-.21 2.39-.46.65-.25 1.2-.58 1.74-1.13.55-.55.89-1.1 1.14-1.74.24-.63.41-1.34.46-2.39.04-1.05.06-1.38.06-4.05 0-2.67-.02-3-.06-4.05-.05-1.05-.22-1.76-.46-2.39-.25-.65-.59-1.19-1.14-1.74-.54-.55-1.09-.88-1.74-1.13-.62-.25-1.34-.41-2.39-.46-1.05-.05-1.38-.06-4.05-.06zm0 1.77c2.63 0 2.94.01 3.98.06.95.04 1.48.2 1.82.34.46.17.79.39 1.13.73.35.35.56.67.74 1.13.13.35.29.87.34 1.83.04 1.03.05 1.34.05 3.97 0 2.62-.01 2.93-.05 3.97-.05.96-.21 1.48-.34 1.82-.18.46-.39.79-.74 1.13-.34.35-.67.56-1.13.74-.34.13-.87.29-1.82.34-1.04.04-1.35.05-3.98.05-2.63 0-2.94-.01-3.97-.05-.96-.05-1.48-.21-1.83-.34-.46-.18-.79-.39-1.13-.74-.35-.34-.56-.67-.74-1.13-.13-.34-.29-.86-.34-1.82-.04-1.04-.05-1.35-.05-3.97 0-2.63.01-2.94.05-3.98.05-.95.21-1.47.34-1.82.18-.46.39-.79.74-1.13.34-.35.67-.56 1.13-.74.35-.13.87-.29 1.83-.34.96-.04 1.32-.05 3.97-.05zm5.25 3.99a1 1 0 000-2.36 1 1 0 000 2.36zm-5.25 9.12a1 1 0 000-10.1 1 1 0 000 10.1zm0-1.77a1 1 0 000-6.56 1 1 0 000 6.56z" fill="currentColor" fill-rule="evenodd" />',
    'kickstarter':'<path d="m19.98 17.51c0-.93-.27-1.83-.84-2.62l-2.14-2.95 2.14-2.95c.57-.76.84-1.69.84-2.62 0-2.45-2.04-4.34-4.46-4.34-1.41 0-2.82.7-3.69 1.89l-1.07 1.46c-.41-1.96-2.12-3.38-4.3-3.38-2.51 0-4.46 1.99-4.46 4.44l0 11.1c0 2.45 1.98 4.46 4.46 4.46 2.15 0 3.83-1.35 4.26-3.27l.94 1.33c.87 1.26 2.32 1.94 3.73 1.94 2.55 0 4.59-2.04 4.59-4.49" fill="currentColor" fill-rule="evenodd" />',
    'linkedin':'<path d="m9.6 9.6h2.69v1.37h.03c.41-.74 1.62-1.49 3.11-1.49 2.87 0 3.67 1.52 3.67 4.35v5.27h-2.85v-4.75c0-1.26-.5-2.37-1.68-2.37-1.43 0-2.12.97-2.12 2.56v4.56h-2.85zm-4.75 9.5h2.85v-9.5h-2.85zm3.21-12.82a1.78 1.78 90 11-3.56 0 1.78 1.78 90 013.56 0z" fill="currentColor" fill-rule="evenodd" />',
    'linkedin-alt':'<path d="m20.51 2h-17c-.81 0-1.5.64-1.5 1.44v17.08c0 .79.45 1.44 1.27 1.49h17c.81-.05 1.68-.69 1.73-1.49v-17.08c-.05-.79-.68-1.44-1.49-1.44zm-10.91 7.6h2.69v1.37h.03c.41-.74 1.62-1.49 3.11-1.49 2.87 0 3.67 1.52 3.67 4.35v5.27h-2.85v-4.75c0-1.26-.5-2.37-1.68-2.37-1.43 0-2.12.97-2.12 2.56v4.56h-2.85zm-4.75 9.5h2.85v-9.5h-2.85zm3.21-12.82a1.78 1.78 90 11-3.56 0 1.78 1.78 90 013.56 0z" fill="currentColor" fill-rule="evenodd" />',
    'opera':'<path d="m12 2a.83.83 90 000 20 10 10 90 006.67-2.54c-1.29.84-2.73 1.26-4.17 1.22-3.75 0-7.67-3.43-7.67-8.68 0-5.25 3.92-8.67 7.67-8.67 1.44-.05 2.88.37 4.17 1.21a10 10 90 00-6.67-2.54zm6.67 17.46a10 10 90 000-14.92c-2.56-1.24-4.95-.36-5.75.18a7.33 5 90 010 14.57c.8.54 3.19 1.41 5.75.17z" fill="currentColor" fill-rule="evenodd" />',
    'patreon':'<path d="m2.26 2.65v18.715h3.4295v-18.715zm5.4198 7.0176a.95.95 0 0014.0363 0 .95.95 0 00-14.0363 0z" fill="currentColor" fill-rule="evenodd" />',
    'pinterest':'<path d="m8.54 19.96-.1-.71c-.08-.77-.16-1.96.04-2.8.17-.76 1.14-4.85 1.14-4.85 0 0-.29-.59-.29-1.45 0-1.36.79-2.37 1.77-2.37.83 0 1.23.62 1.23 1.37 0 .84-.53 2.09-.81 3.25-.23.97.49 1.77 1.45 1.77 1.73 0 3.07-1.83 3.07-4.47 0-2.34-1.68-3.97-4.08-3.97-2.78 0-4.41 2.08-4.41 4.23 0 .84.33 1.74.73 2.23.08.09.09.18.07.28-.08.31-.24.97-.28 1.1-.04.18-.14.22-.32.14-1.22-.57-1.98-2.35-1.98-3.79 0-3.07 2.23-5.9 6.45-5.9 3.38 0 6.01 2.41 6.01 5.64 0 3.36-2.12 6.07-5.06 6.07-.99 0-1.92-.52-2.24-1.12 0 0-.49 1.86-.61 2.32-.22.84-.81 1.91-1.21 2.55l-.36.56c-.08.11-.18.1-.21-.08" fill="currentColor" fill-rule="evenodd" />',
    'pinterest-alt':'<path d="m12 2.2c-5.39 0-9.76 4.37-9.76 9.76 0 4.13 2.57 7.67 6.2 9.09-.08-.77-.16-1.96.04-2.8.17-.76 1.14-4.85 1.14-4.85 0 0-.29-.59-.29-1.45 0-1.36.79-2.37 1.77-2.37.83 0 1.23.62 1.23 1.37 0 .84-.53 2.09-.81 3.25-.23.97.49 1.77 1.45 1.77 1.73 0 3.07-1.83 3.07-4.47 0-2.34-1.68-3.97-4.08-3.97-2.78 0-4.41 2.08-4.41 4.23 0 .84.33 1.74.73 2.23.08.09.09.18.07.28-.08.31-.24.97-.28 1.1-.04.18-.14.22-.32.14-1.22-.57-1.98-2.35-1.98-3.79 0-3.07 2.23-5.9 6.45-5.9 3.38 0 6.01 2.41 6.01 5.64 0 3.36-2.12 6.07-5.06 6.07-.99 0-1.92-.52-2.24-1.12 0 0-.49 1.86-.61 2.32-.22.84-.81 1.91-1.21 2.55.91.29 1.88.44 2.89.44 5.39 0 9.76-4.37 9.76-9.76 0-5.39-4.37-9.76-9.76-9.76z" fill="currentColor" fill-rule="evenodd" />',
    'safari':'<path d="m12 2a1 1 0 000 20 1 1 0 000-20zm0 2 0 1.5m-5.66.85 1.06 1.05m-3.4 4.6 1.5 0m6.5 8 0-1.5m5.66-.85-1.06-1.05m3.4-4.6-1.5 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="m13.5 13.5-8 5 5-8 8-5zm-2.3-2.3-3.2 4.8 4.8-3.2z" fill="currentColor" fill-rule="evenodd" />',
    'spotify':'<path d="m6.28 15.2c.08.34.42.54.76.47 3.55-.8 6.57-.47 8.96.96.3.18.69.09.88-.21a.62.62 90 00-.22-.85c-2.68-1.61-6.02-1.99-9.9-1.12a.62.62 90 00-.48.75zm-.4-2.93c.12.42.57.65.99.52 3.24-.96 7.42-.48 10.16 1.17.37.22.86.11 1.09-.26a.77.77 90 00-.26-1.07c-3.15-1.9-7.75-2.43-11.45-1.33a.78.78 90 00-.53.97zm13.32-3.01c-3.78-2.2-9.77-2.41-13.37-1.34a.93.93 90 00-.63 1.17c.15.49.68.77 1.18.62 3.14-.93 8.56-.76 11.85 1.16a.96.96 90 001.31-.33.92.92 90 00-.34-1.28zm-7.2 12.74a.5.5 90 000-20 .5.5 90 000 20z" fill="currentColor" fill-rule="evenodd" />',
    'tiktok':'<path d="m10.51 9.7c-.3-.04-.58-.06-.86-.06a.4.4 90 000 12 6 6 90 006-6v-6.8c1.26.97 2.78 1.47 4.63 1.55v-3.24a4.8 4.8 90 01-4.63-4.65h-3.2v13.14a.4.4 90 01-5.6 0 2.8 2.8 90 012.8-2.8 2.8 2.8 90 01.86.14z" fill="currentColor" fill-rule="evenodd" />',
    'twitch':'<path d="m7.04 2-3.54 3.54v12.77h4.25v3.54l3.55-3.54h2.83l6.37-6.38 0-9.93zm9.22 12.05 2.84-2.83v-7.8h-11.35v10.63h2.84v2.84l2.84-2.84zm-4.25-7.8h1.42v4.26h-1.42zm4.96 0v4.26h-1.42v-4.26z" fill="currentColor" fill-rule="evenodd" />',
    'twitter':'<path d="m3.39 4.75a11.8 11.8 0 008.45 4.21 4.1 4.1 0 011.53-4.13 4.1 4.1 0 013.95-.57 4.1 4.1 0 011.52 1.02 8.1 8.1 0 002.6-.96 4 4 0 01-1.75 2.21 7.9 7.9 0 002.31-.62 8.2 8.2 0 01-2.03 2.07 11.8 11.8 0 01-.34 3.24 11.1 11.1 0 01-1.4 3.34 11.4 11.4 0 01-2.75 3.06 11.6 11.6 0 01-5.12 2.21 11.8 11.8 0 01-8.36-1.64 8.5 8.5 0 006.05-1.68 4.2 4.2 0 01-3.8-2.8 4 4 0 001.81-.08 4 4 0 01-3.26-4 4 4 0 001.84.49 4 4 0 01-1.25-5.37z" fill="currentColor" fill-rule="evenodd" />',
    'unity':'<path d="m20.86 15.98v-9.32l-8.07-4.66v3.58l3.16 1.83c.13.08.13.25 0 .29l-3.74 2.16c-.13.09-.25.04-.33 0l-3.75-2.16c-.12-.04-.12-.25 0-.29l3.16-1.83v-3.58l-8.11 4.66v9.32-.04.04l3.08-1.79v-3.66c0-.13.17-.21.25-.17l3.74 2.16c.13.09.17.17.17.3v4.32c0 .13-.17.21-.25.17l-3.16-1.83-3.08 1.79 8.07 4.7 8.07-4.66-3.08-1.79-3.16 1.83c-.12.08-.25 0-.25-.17v-4.32c0-.13.08-.25.17-.29l3.74-2.17c.13-.08.25 0 .25.17v3.66l3.12 1.75z" fill="currentColor" fill-rule="evenodd" />',
    'vimeo':'<path d="m21.78 6.7c.02 1-.07 1.53-.36 2.45-.56 1.67-1.78 3.71-3.66 6.12-2.68 3.47-4.94 5.2-6.79 5.23-1.15-.03-2.12-1.08-2.91-3.2l-1.59-5.8c-.59-2.12-1.22-3.17-1.9-3.17-.15 0-.66.31-1.54.92l-.93-1.19 2.87-2.55c1.3-1.12 2.27-1.7 2.92-1.76 1.53-.15 2.47.89 2.83 3.13.38 2.41.64 3.91.79 4.5.44 2 .93 3 1.46 3 .41 0 1.03-.65 1.86-1.95.82-1.3 1.26-2.29 1.32-2.96.12-1.12-.32-1.69-1.32-1.69-.47 0-.96.11-1.46.33.97-3.16 2.82-4.7 5.54-4.61 1.82.05 2.78 1.12 2.87 3.2z" fill="currentColor" fill-rule="evenodd" />',
    'whatsapp':'<path d="m7.04 20.68a10 10 0 004.96 1.32 1 1 0 000-20 10 10 0 00-8.64 15.04l-1.36 4.96zm.36-1.65a8.4 8.4 0 004.6 1.37 1 1 0 000-16.8 8.4 8.4 0 00-6.98 13.07l-1.02 3.33zm1.48-11.86c.19 0 .39.01.58.43.12.28.72 1.71.8 1.91.06.13.1.27.02.45-.1.2-.15.3-.53.74-.24.27-.38.4-.23.66.15.25.67 1.09 1.44 1.77.82.74 1.54 1.05 1.9 1.2.5.21.58.19.73.01.15-.17.61-.75.81-1 .17-.21.35-.22.58-.13.24.09 1.51.71 1.76.84.8.41.63.68.35 1.52-.22.6-1.27 1.18-1.74 1.23-.57.06-1.12.13-3.09-.65-2.43-.95-4.03-3.32-4.35-3.8-.21-.28-1.11-1.48-1.11-2.73 0-1.18.59-1.8.85-2.09.29-.3.55-.36.83-.36z" fill="currentColor" fill-rule="evenodd" />',
    'whatsapp-alt':'<path d="m7.04 20.68a10 10 0 004.96 1.32 1 1 0 000-20 10 10 0 00-8.64 15.04l-1.36 4.96zm1.84-13.51c.19 0 .39.01.58.43.12.28.72 1.71.8 1.91.06.13.1.27.02.45-.1.2-.15.3-.53.74-.24.27-.38.4-.23.66.15.25.67 1.09 1.44 1.77.82.74 1.54 1.05 1.9 1.2.5.21.58.19.73.01.15-.17.61-.75.81-1 .17-.21.35-.22.58-.13.24.09 1.51.71 1.76.84.8.41.63.68.35 1.52-.22.6-1.27 1.18-1.74 1.23-.57.06-1.12.13-3.09-.65-2.43-.95-4.03-3.32-4.35-3.8-.21-.28-1.11-1.48-1.11-2.73 0-1.18.59-1.8.85-2.09.29-.3.55-.36.83-.36z" fill="currentColor" fill-rule="evenodd" />',
    'youtube':'<path d="m10.07 9v6l5.2-3zm-9.07-8zm0 0zm11 4c-2 0-5 .05-7 .3-2.3.2-2.6 1.7-2.74 2.7-.16 1-.26 3-.26 4 0 1 .1 3 .26 4 .14 1 .44 2.5 2.74 2.7 2 .25 5 .3 7 .3 2 0 5-.05 7-.3 2.3-.2 2.6-1.7 2.74-2.7.16-1 .26-3 .26-4 0-1-.1-3-.26-4-.14-1-.44-2.5-2.74-2.7-2-.25-5-.3-7-.3z" fill="currentColor" fill-rule="evenodd" />',
    'iconquix': '<path d="m10 6a1 1 0 004 0 1 1 0 00-4 0zm-4 0-2 1 6 6-6 4 1 3 6-3 0-7zm14 1-2-1-5 4 0 7 6 3 1-3-6-4z" fill="currentColor" fill-rule="evenodd" />'
};
