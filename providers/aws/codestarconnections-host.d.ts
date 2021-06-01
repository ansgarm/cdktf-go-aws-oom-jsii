import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodestarconnectionsHostConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#name CodestarconnectionsHost#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#provider_endpoint CodestarconnectionsHost#provider_endpoint}.
     */
    readonly providerEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#provider_type CodestarconnectionsHost#provider_type}.
     */
    readonly providerType: string;
    /**
     * vpc_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#vpc_configuration CodestarconnectionsHost#vpc_configuration}
     */
    readonly vpcConfiguration?: CodestarconnectionsHostVpcConfiguration[];
}
export interface CodestarconnectionsHostVpcConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#security_group_ids CodestarconnectionsHost#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#subnet_ids CodestarconnectionsHost#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#tls_certificate CodestarconnectionsHost#tls_certificate}.
     */
    readonly tlsCertificate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html#vpc_id CodestarconnectionsHost#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html aws_codestarconnections_host}.
 */
export declare class CodestarconnectionsHost extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html aws_codestarconnections_host} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodestarconnectionsHostConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _providerEndpoint;
    get providerEndpoint(): string;
    set providerEndpoint(value: string);
    get providerEndpointInput(): string;
    private _providerType;
    get providerType(): string;
    set providerType(value: string);
    get providerTypeInput(): string;
    get status(): string;
    private _vpcConfiguration?;
    get vpcConfiguration(): CodestarconnectionsHostVpcConfiguration[];
    set vpcConfiguration(value: CodestarconnectionsHostVpcConfiguration[]);
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): CodestarconnectionsHostVpcConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
