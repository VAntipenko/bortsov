import React from "react";

import { BlockName } from "./BlockName";
import { WrapperBlock } from "./WrapperBlock";
import gratitude_1 from "assets/images/gratitude_1.jpg";
import gratitude_2 from "assets/images/gratitude_2.jpg";
import client_1 from "assets/images/client_1.svg";
import client_2 from "assets/images/client_2.svg";
import client_3 from "assets/images/client_3.svg";
import client_4 from "assets/images/client_4.svg";

export const Clients = () => {
    const clientSvg = [client_1, client_2, client_3, client_4];
    return (
        <WrapperBlock className='clients'>
            <BlockName subtext='clients.label' name='clients.blockName' />
            <div className='clients__content'>
                <div className='clients__content__img'>
                    <img src={gratitude_1} alt='gratitude_1' />
                    <img src={gratitude_2} alt='gratitude_2' />
                </div>
                <div className='clients__content__bubble'>
                    {clientSvg.map((svg) => (
                        <div key={svg}>
                            <img src={svg} alt={`img-${svg}`} />
                        </div>
                    ))}
                </div>
            </div>
        </WrapperBlock>
    );
};
