import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#catalog_id GlueConnection#catalog_id}.
     */
    readonly catalogId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#connection_properties GlueConnection#connection_properties}.
     */
    readonly connectionProperties: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#connection_type GlueConnection#connection_type}.
     */
    readonly connectionType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#description GlueConnection#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#match_criteria GlueConnection#match_criteria}.
     */
    readonly matchCriteria?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#name GlueConnection#name}.
     */
    readonly name: string;
    /**
     * physical_connection_requirements block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#physical_connection_requirements GlueConnection#physical_connection_requirements}
     */
    readonly physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements[];
}
export interface GlueConnectionPhysicalConnectionRequirements {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#availability_zone GlueConnection#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#security_group_id_list GlueConnection#security_group_id_list}.
     */
    readonly securityGroupIdList?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#subnet_id GlueConnection#subnet_id}.
     */
    readonly subnetId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html aws_glue_connection}.
 */
export declare class GlueConnection extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html aws_glue_connection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueConnectionConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _connectionProperties;
    get connectionProperties(): {
        [key: string]: string;
    };
    set connectionProperties(value: {
        [key: string]: string;
    });
    get connectionPropertiesInput(): {
        [key: string]: string;
    };
    private _connectionType?;
    get connectionType(): string;
    set connectionType(value: string);
    resetConnectionType(): void;
    get connectionTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _matchCriteria?;
    get matchCriteria(): string[];
    set matchCriteria(value: string[]);
    resetMatchCriteria(): void;
    get matchCriteriaInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _physicalConnectionRequirements?;
    get physicalConnectionRequirements(): GlueConnectionPhysicalConnectionRequirements[];
    set physicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements[]);
    resetPhysicalConnectionRequirements(): void;
    get physicalConnectionRequirementsInput(): GlueConnectionPhysicalConnectionRequirements[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
