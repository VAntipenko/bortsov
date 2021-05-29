import React from "react";
import { useTranslation, Trans } from "react-i18next";

import { BlockName } from "./BlockName";
import { WrapperBlock } from "./WrapperBlock";
import cross from "assets/icons/cross.svg";

export const Question = () => {
  const { t } = useTranslation();

  const [listKeysForQuestion, setListKeysForQuestion] = React.useState([
    { key: "howToChoosePavingSlabs", visible: false },
    { key: "advantagesOfPavingSlabs", visible: false },
    { key: "theDifferenceBetweenPavingTiles", visible: false },
    { key: "caringForPavingSlabs", visible: false },
    {
      key: "theDifferenceBetweenVibrocastAndVibropressedPaving",
      visible: false,
    },
  ]);

  const showAnswer = (index) => {
    setListKeysForQuestion(
      (prevState) => [...prevState],
      (listKeysForQuestion[index].visible = !listKeysForQuestion[index].visible)
    );
  };

  return (
    <WrapperBlock className="question">
      <BlockName name="faq.blockName" subtext="faq.label" />
      <div className="question__content">
        <ul>
          {listKeysForQuestion.map((question, index) => {
            return (
              <li key={index}>
                <div onClick={() => showAnswer(index)}>
                  <h4>{t([`faq.listQuestions.${question.key}.label`])}</h4>
                  <img
                    className={question.visible ? "rotated" : ""}
                    src={cross}
                    alt="crossIcon"
                  />
                </div>
                {question.visible && (
                  <Trans i18nKey={`faq.listQuestions.${question.key}.subtext`}>
                    <ul>
                      <li>
                        <span>
                          {t([`faq.listQuestions.${question.key}.subtext`])}
                        </span>
                      </li>
                    </ul>
                  </Trans>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </WrapperBlock>
  );
};
