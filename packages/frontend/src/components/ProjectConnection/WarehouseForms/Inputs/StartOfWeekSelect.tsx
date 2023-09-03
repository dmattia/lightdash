import { Select } from '@mantine/core';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

const defaultOption = { value: ' ', label: 'Auto' };
const daysOfWeekOptions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
].map((x, index) => ({ value: index.toString(), label: x }));

const StartOfWeekSelect: FC<{ disabled: boolean }> = ({ disabled }) => {
    return (
        <Controller
            name="warehouse.startOfWeek"
            defaultValue={defaultOption.value}
            render={({ field }) => (
                <Select
                    label="Start of week"
                    description="Will be taken into account when using 'WEEK' time interval"
                    data={[defaultOption, ...daysOfWeekOptions]}
                    value={field.value}
                    onChange={field.onChange}
                    disabled={disabled}
                    dropdownPosition="top"
                />
            )}
        />
    );
};

export default StartOfWeekSelect;
