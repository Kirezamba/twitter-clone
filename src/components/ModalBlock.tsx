import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

interface ModalBlockProps {
  title: string;
  visible?: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  visible = false,
  onClose,
  children,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <Dialog open={visible} onClose={onClose}>
        <DialogTitle id="form-dialog-title">
          <IconButton onClick={onClose} color="secondary">
            <CloseIcon sx={{ fontSize: 26 }} color="primary" />
          </IconButton>
          {title}
        </DialogTitle>
        <DialogContent sx={{ width: 450 }}>{children}</DialogContent>
      </Dialog>
    </>
  );
};
