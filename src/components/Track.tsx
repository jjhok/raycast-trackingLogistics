import { Icon, List } from "@raycast/api";
import moment from "moment";
import React, { useState } from "react";
import { getNaverPasspordKey, getTrackData } from "../api/api";
import { ITrackData } from "../model/trackData";

interface IProps {
  vendorKey: string;
}

export default function Track({ vendorKey }: IProps) {
  const [trackData, setTrackData] = useState<ITrackData>();
  const [hasError, setHasError] = useState<boolean>(false);

  const findPassportKey = (html: string) => {
    const index: number = html.indexOf("passportKey");
    const endIndex = html.indexOf('"', index + 15);
    return html.substring(index + 15, endIndex);
  };

  const handleTextChange = (trackNumber: string) => {
    const regex = new RegExp("[0-9]{8}");
    if (regex.test(trackNumber)) {
      getNaverPasspordKey()
        .then((response) => {
          return findPassportKey(response.data);
        })
        .then((passportKey) => {
          getTrackData(vendorKey, trackNumber, passportKey).then((response) => {
            setTrackData(response.data);
          });
        })
        .catch((error) => setHasError(true));
    }
  };

  const convertDate = (dateString: string) => {
    return moment(dateString).format("YYYY-MM-DD hh:mm");
  };

  return (
    <List onSearchTextChange={handleTextChange}>
      {trackData && !hasError && trackData.trackingDetails.length > 0 ? (
        <List.Section title="최종 배송상태">
          <List.Item
            title={trackData?.completeYN === "Y" ? "배송완료" : "배송 미완료"}
            icon={trackData?.completeYN === "Y" ? Icon.Checkmark : Icon.XmarkCircle}
          />
        </List.Section>
      ) : (
        <List.Item title="배송정보를 찾을 수 없습니다." />
      )}
      {trackData && !hasError && trackData.trackingDetails.length > 0 && (
        <List.Section title="history">
          {trackData.trackingDetails.map((tracking, index) => (
            <List.Item
              key={index}
              icon={Icon.Binoculars}
              title={tracking.kind}
              subtitle={tracking.where}
              accessoryTitle={convertDate(tracking.timeString)}
            />
          ))}
        </List.Section>
      )}
    </List>
  );
}
