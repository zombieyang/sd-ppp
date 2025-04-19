import { useEffect, useState } from "react";
import { Input, Tooltip } from "antd";
import i18n from "../../../../../../src/common/i18n.mts";

export interface EditableTitleProps {
    title: string;
    onTitleChange?: (newTitle: string) => void;
}

export function EditableTitle({ title, onTitleChange }: EditableTitleProps) {
    const [editing, setEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    useEffect(() => {
        setEditedTitle(title);
    }, [title]);

    const handleClick = () => {
        setEditing(true);
    };
    
    const handleBlur = () => {
        setEditing(false);
        if (editedTitle !== title && onTitleChange) {
            onTitleChange(editedTitle);
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTitle(e.target.value);
    };
    
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setEditing(false);
            if (editedTitle !== title && onTitleChange) {
                onTitleChange(editedTitle);
            }
        } else if (e.key === 'Escape') {
            setEditing(false);
            setEditedTitle(title); // Reset to original title
        }
    };
    
    return editing ? (
        <Input
            autoFocus
            value={editedTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            size="small"
            className="workflow-edit-field-title-input"
        />
    ) : (
        <Tooltip title={i18n('click to edit')}>
            <span 
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                {editedTitle}
            </span>
        </Tooltip>
    );
};