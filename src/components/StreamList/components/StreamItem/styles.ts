import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;

  margin-bottom: 24px;
  margin-right: 24px;
`;

export const Thumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const Column = styled.View`
  margin-left: 11px;
  flex: 1;
`;

export const InfoRow = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.tag};
`;

export const UserName = styled.Text`
  color: ${colors.black};
  margin-left: 5px;
  font-family: roboto_700;
`;

export const Description = styled.Text`
  color: ${colors.black};
`;

export const Category = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
`;

export const TagsRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagBadge = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: 5px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 10px;
`;
