import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LicensemanagerAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html#license_configuration_arn LicensemanagerAssociation#license_configuration_arn}.
     */
    readonly licenseConfigurationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html#resource_arn LicensemanagerAssociation#resource_arn}.
     */
    readonly resourceArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html aws_licensemanager_association}.
 */
export declare class LicensemanagerAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html aws_licensemanager_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LicensemanagerAssociationConfig);
    get id(): string;
    private _licenseConfigurationArn;
    get licenseConfigurationArn(): string;
    set licenseConfigurationArn(value: string);
    get licenseConfigurationArnInput(): string;
    private _resourceArn;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
