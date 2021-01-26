import React from 'react'
import PropTypes from 'prop-types'

/* Components */
import {
    Card,
    CardPrimaryAction,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from '@rmwc/card';
import { Typography } from '@rmwc/typography'
import { Icon } from '@rmwc/icon'
import { RoombedHeader } from './style'

const RoombedCard = ({
    label,
    subLabel,
    iconSubLabel,
    bgColor,
    textColor,
    onClick
}) => {
    return (
        <Card
            style={{ width: 250, margin: 25 }}
            onClick={onClick}
        >
            <CardPrimaryAction>
                <RoombedHeader background={bgColor} color={textColor}>
                    {label}
                </RoombedHeader>
            </CardPrimaryAction>
            <CardActions>
                <CardActionButtons>
                    <Icon icon={iconSubLabel} />
                    <Typography use="button" style={{ paddingLeft: 10 }}>{subLabel}</Typography>
                </CardActionButtons>
                <CardActionIcons>
                    <Icon icon="keyboard_arrow_right" />
                </CardActionIcons>
            </CardActions>
        </Card>
    )
}

RoombedCard.propTypes = {
    label: PropTypes.string.isRequired,
    subLabel: PropTypes.string.isRequired,
    iconSubLabel: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func
}
RoombedCard.defaultProps = {
    bgColor: '#3d3c3c',
    textColor: '#fff',
    onClick: () => { }
}
export default RoombedCard
