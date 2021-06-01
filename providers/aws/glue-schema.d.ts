import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#compatibility GlueSchema#compatibility}.
     */
    readonly compatibility: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#data_format GlueSchema#data_format}.
     */
    readonly dataFormat: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#description GlueSchema#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#registry_arn GlueSchema#registry_arn}.
     */
    readonly registryArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#schema_definition GlueSchema#schema_definition}.
     */
    readonly schemaDefinition: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#schema_name GlueSchema#schema_name}.
     */
    readonly schemaName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#tags GlueSchema#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html#tags_all GlueSchema#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html aws_glue_schema}.
 */
export declare class GlueSchema extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html aws_glue_schema} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueSchemaConfig);
    get arn(): string;
    private _compatibility;
    get compatibility(): string;
    set compatibility(value: string);
    get compatibilityInput(): string;
    private _dataFormat;
    get dataFormat(): string;
    set dataFormat(value: string);
    get dataFormatInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get latestSchemaVersion(): number;
    get nextSchemaVersion(): number;
    private _registryArn?;
    get registryArn(): string;
    set registryArn(value: string);
    resetRegistryArn(): void;
    get registryArnInput(): string | undefined;
    get registryName(): string;
    get schemaCheckpoint(): number;
    private _schemaDefinition;
    get schemaDefinition(): string;
    set schemaDefinition(value: string);
    get schemaDefinitionInput(): string;
    private _schemaName;
    get schemaName(): string;
    set schemaName(value: string);
    get schemaNameInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
