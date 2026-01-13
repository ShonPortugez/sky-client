import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface DeleteIconButtonProps {
    tooltipText: string;
    onClick?: () => void;
}

const DeleteIconButton = (props: DeleteIconButtonProps) => {
    return (
        <Tooltip title={props.tooltipText}>
            <IconButton
                size="small"
                onClick={props.onClick}
                color="error"
                sx={{
                    '&:hover': {
                        color: 'error.main',
                    },
                }}
            >
                <DeleteOutlineOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
};

export default DeleteIconButton;