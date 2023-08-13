

export type DescriptionText = {
    type: 'text';
    content: string;
    size?: number;
};
export type DescriptionImage = {
    type: 'image';
    uri: string;
    mime: string;
    width?: number;
    height?: number;
};
export type MediaImage = {
    type: 'image';
    uri: string;
    mime: string;
    width: number;
    height: number;
};
export type MediaVideo = {
    type: 'video';
    uri: string;
    mime: string;
    width: number;
    height: number;
    duration?: number;
};

export type Media = MediaImage // to support later | MediaVideo;
export type Description = DescriptionText // to support later | DescriptionImage;

export type Inventory = {
    sku?: string;
    barcode?: string;
    quantity?: number;
    track: boolean;
}

export type Variant = {
    name: string;
    description: string;
    price: number;
    price_original?: number; // crossed price
    quantity?: number;
    inventory?: Inventory;
    media?: Media[];
}

export type Option = {
    name: string;
    description: string;
    variants: Variant[];
}

export type DraftItemData = {
    title: string;
    // descriptions: Description[];
    description: string;
    media: Media[];
    price: number;
    price_original?: number; // crossed price
    quantity?: number;
    options: Option[]
}
