import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorklinkWebsiteCertificateAuthorityAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}.
     */
    readonly certificate: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}.
     */
    readonly displayName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}.
     */
    readonly fleetArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html aws_worklink_website_certificate_authority_association}.
 */
export declare class WorklinkWebsiteCertificateAuthorityAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html aws_worklink_website_certificate_authority_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WorklinkWebsiteCertificateAuthorityAssociationConfig);
    private _certificate;
    get certificate(): string;
    set certificate(value: string);
    get certificateInput(): string;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _fleetArn;
    get fleetArn(): string;
    set fleetArn(value: string);
    get fleetArnInput(): string;
    get id(): string;
    get websiteCaId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
